import { describe, it, expect } from "vite-plus/test";
import { readdirSync, readFileSync, statSync } from "fs";
import { join } from "path";

// Hardcoded mappings for irreversible naming conversions
const IRREVERSIBLE_MAPPINGS: Record<string, string> = {
  Appstream20: "appstream_2_0",
  Cloud9: "cloud9",
  Cloud9Resource: "cloud9_resource",
  CloudFront: "cloudfront",
  CloudFrontDownloadDistribution: "cloudfront_download_distribution",
  CloudFrontEdgeLocation: "cloudfront_edge_location",
  CloudFrontStreamingDistribution: "cloudfront_streaming_distribution",
  Route53: "route_53",
  Route53HostedZone: "route_53_hosted_zone",
  SAPHANAOnAzure: "sap_hana_on_azure",
  Workspaces2: "workspaces_2",
  SQLVM: "sql_vm",
  AzureSQLVM: "azure_sql_vm",
  AzureOperator5gCore: "azure_operator_5g_core",
  ADB2C: "ad_b2c",
  AzureADB2C: "azure_ad_b2c",
  Windows10IotCoreServices: "windows_10_iot_core_services",
  ArcPostgresql: "arc_postgresql_",
  CCM: "ccm",
  CM: "cm",
  Bind9: "bind9",
  EC2API: "ec2api",
  Iot1Click: "iot_1_click",
};

// Conversion function from generate-node-docs.mjs
function classNameToImportVar(className: string): string {
  // Use hardcoded mappings first
  if (IRREVERSIBLE_MAPPINGS[className]) {
    return IRREVERSIBLE_MAPPINGS[className];
  }

  return className
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2") // ABCd -> ABC_d (consecutive capitals before word)
    .replace(/([a-z])([A-Z])/g, "$1_$2") // aB -> a_B (camelCase)
    .replace(/([0-9])([A-Z])/g, "$1_$2") // 1A -> 1_A (number before capital)
    .toLowerCase();
}

const providersDir = join(__dirname, "..", "src", "providers");

describe("Generate Scripts Compatibility", () => {
  describe("Naming Convention Conversions", () => {
    it("should correctly convert reversible class names", () => {
      const testCases = [
        { className: "AmazonOpensearchService", expected: "amazon_opensearch_service" },
        { className: "EC2Ami", expected: "ec2_ami" },
        { className: "EMRCluster", expected: "emr_cluster" },
        { className: "ElasticBeanstalk", expected: "elastic_beanstalk" },
        { className: "SimpleStorageServiceS3", expected: "simple_storage_service_s3" },
        { className: "InternetAlt1", expected: "internet_alt1" },
        { className: "KinesisDataAnalytics", expected: "kinesis_data_analytics" },
        { className: "IotAlexaEcho", expected: "iot_alexa_echo" },
      ];

      for (const { className, expected } of testCases) {
        expect(classNameToImportVar(className)).toBe(expected);
      }
    });

    it("should handle consecutive capitals correctly", () => {
      expect(classNameToImportVar("EMRCluster")).toBe("emr_cluster");
      expect(classNameToImportVar("EMREngineMaprM3")).toBe("emr_engine_mapr_m3");
      expect(classNameToImportVar("EC2Ami")).toBe("ec2_ami");
    });

    it("should handle numbers at word boundaries", () => {
      expect(classNameToImportVar("S3Glacier")).toBe("s3_glacier");
      expect(classNameToImportVar("SimpleStorageServiceS3")).toBe("simple_storage_service_s3");
    });
  });

  describe("Provider File Parsing", () => {
    it("should parse all provider files and find matching icon imports", () => {
      const providers = readdirSync(providersDir);
      let totalNodes = 0;
      let nodesWithIcons = 0;

      for (const provider of providers) {
        const providerPath = join(providersDir, provider);
        const stat = statSync(providerPath);

        if (!stat.isDirectory()) continue;

        const entries = readdirSync(providerPath);
        for (const entry of entries) {
          if (!entry.endsWith(".ts") || entry === "index.ts") continue;

          const filePath = join(providerPath, entry);
          const content = readFileSync(filePath, "utf-8");

          // Find all export function declarations
          const exportRegex = /export function (\w+)\(/g;
          let match;

          while ((match = exportRegex.exec(content)) !== null) {
            totalNodes++;
            const nodeName = match[1];

            // Try to find icon import
            const iconVarName = classNameToImportVar(nodeName) + "Icon";
            const iconImportRegex = new RegExp(`import ${iconVarName} from "([^"]+)"`);

            if (content.match(iconImportRegex)) {
              nodesWithIcons++;
            }
          }
        }
      }

      // Should have nearly 100% coverage (allows for a few edge cases)
      const coverage = nodesWithIcons / totalNodes;
      expect(coverage).toBeGreaterThanOrEqual(0.998); // 99.8% threshold
      expect(totalNodes).toBeGreaterThan(2000); // We should have many nodes
    });
  });
});
