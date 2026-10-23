import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/projects/datavision/", "/projects/gym-os/"].map((path) => ({
    url: new URL(path, siteOrigin).toString(),
  }));
}
