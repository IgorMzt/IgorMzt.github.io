const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteOrigin = new URL(
  configuredUrl ?? (vercelProductionHost ? `https://${vercelProductionHost}` : "http://localhost:3000"),
).origin;
