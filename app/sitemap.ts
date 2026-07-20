import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { services } from "@/lib/services";

const BASE_URL = "https://clearshorecounselling.com";

// Bump when static page content meaningfully changes.
const SITE_UPDATED = new Date("2026-07-20");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/telehealth", "/faq", "/resources", "/contact", "/blog", "/privacy"];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: SITE_UPDATED,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/privacy" ? 0.3 : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries, ...postEntries];
}
