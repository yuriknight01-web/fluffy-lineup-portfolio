import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryPath = "/fluffy-lineup-portfolio";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? repositoryPath : undefined,
  assetPrefix: isGitHubPages ? repositoryPath : undefined,
  trailingSlash: isGitHubPages,
};

export default nextConfig;
