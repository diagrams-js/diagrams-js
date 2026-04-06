#!/usr/bin/env node
/**
 * Generate nodes documentation from provider resources
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "..");
const RESOURCES_DIR = path.join(ROOT_DIR, "resources");
const DOCS_DIR = path.join(ROOT_DIR, "docs", "docs", "nodes");

// Import config from config.ts by reading and parsing it
const configPath = path.join(__dirname, "config.ts");
const configContent = fs.readFileSync(configPath, "utf-8");

// Extract PROVIDERS array
const providersMatch = configContent.match(/export const PROVIDERS = \[([\s\S]*?)\] as const/);
const PROVIDERS = providersMatch
  ? providersMatch[1].match(/"([^"]+)"/g).map((s) => s.replace(/"/g, ""))
  : [];

// Extract UPPER_WORDS
const upperWordsMatch = configContent.match(/export const UPPER_WORDS[\s\S]*?}= ({[\s\S]*?});/);
const UPPER_WORDS = upperWordsMatch ? eval("(" + upperWordsMatch[1] + ")") : {};

// Extract TITLE_WORDS
const titleWordsMatch = configContent.match(/export const TITLE_WORDS[\s\S]*?}= ({[\s\S]*?});/);
const TITLE_WORDS = titleWordsMatch ? eval("(" + titleWordsMatch[1] + ")") : {};

// Extract ALIASES - simplified parsing
const aliasesMatch = configContent.match(/export const ALIASES[\s\S]*?}= ({[\s\S]*?});\s*$/m);
let ALIASES = {};
if (aliasesMatch) {
  try {
    ALIASES = eval("(" + aliasesMatch[1] + ")");
  } catch (e) {
    console.warn("Could not parse ALIASES, using empty object");
    ALIASES = {};
  }
}

function toPascalCase(str) {
  return str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");
}

function upOrTitle(provider, word) {
  const upperWords = UPPER_WORDS[provider] || [];
  const titleWords = TITLE_WORDS[provider] || {};

  if (upperWords.includes(word.toLowerCase())) {
    return word.toUpperCase();
  }
  if (titleWords[word.toLowerCase()]) {
    return titleWords[word.toLowerCase()];
  }
  return toPascalCase(word);
}

function generateClassName(provider, filename) {
  const base = path.basename(filename, ".png");
  const parts = base.split("-");
  return parts.map((part) => upOrTitle(provider, part)).join("");
}

function getAlias(provider, category, className) {
  const providerAliases = ALIASES[provider];
  if (!providerAliases) return null;

  const categoryAliases = providerAliases[category];
  if (!categoryAliases) return null;

  return categoryAliases[className] || null;
}

function generateProviderDocs(provider) {
  const providerDir = path.join(RESOURCES_DIR, provider);

  if (!fs.existsSync(providerDir)) {
    console.log(`  ⚠️  No resources found for ${provider}`);
    return "";
  }

  const categories = fs
    .readdirSync(providerDir)
    .filter((f) => fs.statSync(path.join(providerDir, f)).isDirectory())
    .sort();

  let content = `---
title: ${toPascalCase(provider)}
description: Node classes for ${provider} provider
---

# ${toPascalCase(provider)}

Node classes list for the ${provider} provider.

`;

  for (const category of categories) {
    const categoryDir = path.join(providerDir, category);
    const icons = fs
      .readdirSync(categoryDir)
      .filter((f) => f.endsWith(".png"))
      .sort();

    if (icons.length === 0) continue;

    content += `## ${provider}.${category}\n\n`;

    for (const icon of icons) {
      const className = generateClassName(provider, icon);
      const alias = getAlias(provider, category, className);
      const iconPath = `/img/resources/${provider}/${category}/${icon}`;

      const importPath = `diagrams-js/${provider}/${category}`;

      content += `<div className="node-item">\n`;
      content += `  <img src="${iconPath}" width="30" alt="${className}" />\n`;
      content += `  <span className="node-class">${className}</span>`;

      if (alias) {
        content += ` <span className="node-alias">(${alias})</span>`;
      }

      content += `\n  <code className="node-import">${importPath}</code>\n`;
      content += `</div>\n\n`;
    }
  }

  // Add usage example
  content += `## Usage Example\n\n`;
  content += `\`\`\`typescript\n`;
  content += `import { Diagram } from "diagrams-js";\n`;

  // Add imports from first 3 categories as examples
  let exampleImports = [];
  for (const category of categories.slice(0, 3)) {
    const categoryDir = path.join(providerDir, category);
    const icons = fs.readdirSync(categoryDir).filter((f) => f.endsWith(".png"));
    if (icons.length > 0) {
      const className = generateClassName(provider, icons[0]);
      exampleImports.push(`import { ${className} } from "diagrams-js/${provider}/${category}";`);
    }
  }

  content += exampleImports.join("\n");
  content += `\n\n`;
  content += `const diagram = new Diagram("${toPascalCase(provider)} Example");\n`;

  // Add node creation example
  for (let i = 0; i < Math.min(2, categories.length); i++) {
    const category = categories[i];
    const categoryDir = path.join(providerDir, category);
    const icons = fs.readdirSync(categoryDir).filter((f) => f.endsWith(".png"));
    if (icons.length > 0) {
      const className = generateClassName(provider, icons[0]);
      const nodeName = className.toLowerCase().replace(/[0-9]/g, "");
      content += `const ${nodeName}${i + 1} = diagram.add(new ${className}("Node ${i + 1}"));\n`;
    }
  }

  content += `\nconst svg = await diagram.render();\n`;
  content += `\`\`\`\n`;

  return content;
}

async function main() {
  console.log("Generating nodes documentation...\n");

  // Ensure docs directory exists
  if (!fs.existsSync(DOCS_DIR)) {
    fs.mkdirSync(DOCS_DIR, { recursive: true });
  }

  // Generate docs for each provider
  for (const provider of PROVIDERS) {
    console.log(`Processing ${provider}...`);
    const content = generateProviderDocs(provider);

    if (content) {
      const filePath = path.join(DOCS_DIR, `${provider}.mdx`);
      fs.writeFileSync(filePath, content);
      console.log(`  ✓ Generated ${provider}.mdx`);
    }
  }

  // Create index file
  const providerLinks = PROVIDERS.map((p) => {
    const name =
      p === "aws"
        ? "Amazon Web Services"
        : p === "gcp"
          ? "Google Cloud Platform"
          : p === "k8s"
            ? "Kubernetes"
            : toPascalCase(p);
    return `| [${toPascalCase(p)}](/nodes/${p}) | ${name} nodes |`;
  }).join("\n");

  const indexContent = `---
title: Nodes
description: All available node classes organized by provider
---

# Nodes Reference

Browse all available node classes organized by cloud provider and service category.

## Available Providers

| Provider | Description |
|----------|-------------|
${providerLinks}

## Quick Reference

Each provider page lists all available node classes with:
- **Icon**: Visual representation of the service
- **Class Name**: The exported class name
- **Alias**: Short name alias (if available)
- **Import Path**: Full import path

## Usage Pattern

\`\`\`typescript
import { Diagram } from "diagrams-js";
import { EC2, Lambda } from "diagrams-js/aws/compute";
import { S3 } from "diagrams-js/aws/storage";

const diagram = new Diagram("My Architecture");
const server = diagram.add(new EC2("Web Server"));
const storage = diagram.add(new S3("Storage"));
\`\`\`
`;

  fs.writeFileSync(path.join(DOCS_DIR, "index.mdx"), indexContent);
  console.log(`\n✓ Generated index.mdx`);
  console.log(`\nDone! Generated documentation in ${DOCS_DIR}`);
}

main().catch(console.error);
