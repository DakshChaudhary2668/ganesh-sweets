"use client";

import { useMemo, useState } from "react";
import { categories, products, type Category } from "@/data/products";
import ProductCard from "./ProductCard";
import styles from "./Catalogue.module.scss";

export default function Catalogue({ initialCategory }: { initialCategory?: Category }) {
  const [category, setCategory] = useState<Category | "All">(initialCategory ?? "All");
  const [query, setQuery] = useState("");
  const shown = useMemo(() => products.filter((product) =>
    (category === "All" || product.category === category) &&
    `${product.name} ${product.category}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()),
  ), [category, query]);

  return <div className={`${styles.catalogue} container`}>
    <aside className={styles.sidebar} aria-label="Product categories">
      <span className="eyebrow">Browse sweets</span>
      <h2>Find your favourite</h2>
      <div className={styles.filters}>
        {(["All", ...categories] as const).map((name) => <button key={name} type="button" onClick={() => setCategory(name)} aria-pressed={category === name} className={category === name ? styles.selected : ""}>
          <span>{name === "All" ? "All sweets" : name}</span><small>{name === "All" ? products.length : products.filter((item) => item.category === name).length}</small>
        </button>)}
      </div>
      <div className={styles.help}><p>Looking for gift boxes?</p><span>Ask us about the current selection and packaging.</span><a href="/services#festival-gift-boxes">Explore gifting <span aria-hidden="true">→</span></a></div>
    </aside>
    <div className={styles.results}>
      <label className={styles.search} id="catalogue-search"><span className="sr-only">Search sweets and snacks</span><span aria-hidden="true">⌕</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search sweets or snacks" /></label>
      <div className={styles.count}><div><span className="eyebrow">The collection</span><h2>{category === "All" ? "All sweets" : category} <em>({shown.length})</em></h2></div><p>Prices shown are from the current public catalogue. Please confirm when enquiring.</p></div>
      {shown.length ? <div className={styles.grid}>{shown.map((product) => <ProductCard key={product.name} product={product} />)}</div> : <div className={styles.empty}><h3>No sweets found</h3><p>Try another search or choose a different category.</p><button type="button" className="button button-outline" onClick={() => { setQuery(""); setCategory("All"); }}>Clear filters</button></div>}
    </div>
  </div>;
}
