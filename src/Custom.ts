import { Node } from "./Node.js";

/**
 * Custom node with an external icon
 * Allows using icons from URLs or local file paths
 *
 * @example
 * ```typescript
 * // With URL (browser)
 * const custom = new Custom("My Service", "https://example.com/icon.png");
 *
 * // With local path (Node.js with file system access)
 * const local = new Custom("Local Service", "./icons/my-icon.png");
 *
 * // In a diagram
 * const diagram = new Diagram("Custom Nodes");
 * const node = diagram.add(new Custom("Custom", "https://example.com/icon.png"));
 * ```
 */
export class Custom extends Node {
  private _iconUrl: string;

  /**
   * Create a custom node with an external icon
   * @param label - The node label
   * @param iconUrl - URL or path to the icon image (PNG, SVG, etc.)
   * @param options - Additional node options
   */
  constructor(label: string, iconUrl: string, options?: { nodeId?: string }) {
    super(label, {
      ...options,
      shape: "none",
      height: "1.0",
      width: "1.0",
      fixedsize: "true",
      margin: "0,0",
    });
    this._iconUrl = iconUrl;
  }

  /**
   * Get the icon URL/path for this node
   * @internal
   */
  getIconUrl(): string {
    return this._iconUrl;
  }

  /**
   * Check if the icon is a data URL (already embedded)
   */
  private _isDataUrl(): boolean {
    return this._iconUrl.startsWith("data:");
  }

  /**
   * Check if the icon is a remote URL
   */
  private _isRemoteUrl(): boolean {
    return this._iconUrl.startsWith("http://") || this._iconUrl.startsWith("https://");
  }

  /**
   * Load the icon and return as data URL
   * In browser: fetches from URL
   * In Node.js: reads from file system or fetches from URL
   */
  async loadIcon(): Promise<string | null> {
    // Already a data URL, return as-is
    if (this._isDataUrl()) {
      return this._iconUrl;
    }

    // Remote URL - fetch it
    if (this._isRemoteUrl()) {
      return this._fetchRemoteIcon();
    }

    // Local file path
    return this._loadLocalIcon();
  }

  /**
   * Fetch icon from remote URL
   */
  private async _fetchRemoteIcon(): Promise<string | null> {
    try {
      // Use global fetch (available in browser and Node.js 18+)
      const response = await globalThis.fetch(this._iconUrl);
      if (!response.ok) {
        console.warn(`Failed to fetch icon: ${this._iconUrl}`);
        return null;
      }

      // Browser environment
      if (typeof Blob !== "undefined") {
        const blob = await response.blob();
        return this._blobToDataUrl(blob);
      }

      // Node.js environment
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const contentType = response.headers.get("content-type") || "image/png";
      return `data:${contentType};base64,${buffer.toString("base64")}`;
    } catch (error) {
      console.warn(`Error fetching icon: ${this._iconUrl}`, error);
      return null;
    }
  }

  /**
   * Load icon from local file path (Node.js only)
   */
  private async _loadLocalIcon(): Promise<string | null> {
    try {
      // Dynamic import to avoid issues in browser
      const fs = await import("node:fs/promises");
      const path = await import("node:path");

      const buffer = await fs.readFile(this._iconUrl);
      const ext = path.extname(this._iconUrl).toLowerCase();

      // Determine content type from extension
      let contentType = "image/png";
      if (ext === ".svg") contentType = "image/svg+xml";
      else if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
      else if (ext === ".gif") contentType = "image/gif";
      else if (ext === ".webp") contentType = "image/webp";

      return `data:${contentType};base64,${buffer.toString("base64")}`;
    } catch (error) {
      console.warn(`Error loading local icon: ${this._iconUrl}`, error);
      return null;
    }
  }

  /**
   * Convert Blob to data URL (browser only)
   */
  private _blobToDataUrl(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}
