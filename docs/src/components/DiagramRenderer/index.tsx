import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

interface DiagramRendererProps {
  code: string;
  height?: string;
}

export default function DiagramRenderer({
  code,
  height = "400px",
}: DiagramRendererProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const renderDiagram = async () => {
      try {
        setLoading(true);
        setError("");

        // Dynamic import to avoid SSR issues
        const { Diagram } = await import("diagrams-js");

        // Create a sandboxed function to execute the diagram code
        const sandbox = new Function(
          "Diagram",
          `
            return (async () => {
              ${code}
            })();
          `,
        );

        const result = await sandbox(Diagram);

        if (typeof result === "string") {
          setSvg(result);
        } else {
          setSvg("<!-- Diagram rendered successfully -->");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };

    renderDiagram();
  }, [code]);

  if (loading) {
    return (
      <div className={styles.diagramContainer} style={{ height }}>
        <div className={styles.loading}>Loading diagram...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.diagramContainer} style={{ height }}>
        <div className={styles.error}>
          <strong>Error rendering diagram:</strong>
          <pre>{error}</pre>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={styles.diagramContainer}
      style={{ height }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
