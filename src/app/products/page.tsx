import type { Metadata } from "next";
import Catalogue from "@/components/Catalogue";
import { categories, type Category } from "@/data/products";

export const metadata: Metadata = { title: "Sweets & Home Foods", description: "Browse the Ganesh Sweets catalogue of traditional sweets, ghee specials, home foods and snacks.", alternates: { canonical: "/products" } };

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const initialCategory = categories.includes(category as Category) ? category as Category : undefined;
  return <main id="main-content"><div className="page-intro"><div className="container"><span className="eyebrow">Our full range</span><h1>Fresh sweets & home foods.</h1><p>Explore the Ganesh Sweets catalogue. Search by name or browse the categories below.</p></div></div><Catalogue initialCategory={initialCategory} /></main>;
}
