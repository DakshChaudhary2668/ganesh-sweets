import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/products", "/services", "/about", "/contact"].map((path) => ({ url: `https://www.ganeshsweets.in${path}` }));
}
