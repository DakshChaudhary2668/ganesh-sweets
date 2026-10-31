"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/data/products";
import { productMessage, whatsappUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";
import styles from "./ProductCard.module.scss";

export default function ProductCard({ product }: { product: Product }) {
  const [pack, setPack] = useState(product.packs[0]);
  return <article className={styles.card}>
    <div className={styles.visual}>
      {product.image ? <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1050px) 50vw, 25vw" /> : <div className={styles.noPhoto} aria-label="Product photograph pending"><span className={styles.flower} aria-hidden="true">✺</span><span>{product.category}</span></div>}
    </div>
    <div className={styles.details}>
      <p className={styles.category}>{product.category}</p>
      <div className={styles.titleRow}><h3>{product.name}</h3><strong>₹{product.price.toLocaleString("en-IN")}/{product.unit}</strong></div>
      <fieldset className={styles.packs}><legend>Choose a pack size for {product.name}</legend>{product.packs.map((size) => <label key={size}><input type="radio" name={`pack-${product.name.replace(/\W/g, "-")}`} value={size} checked={pack === size} onChange={() => setPack(size)} /><span>{size}</span></label>)}</fieldset>
      <a className={`${styles.order} button button-primary`} href={whatsappUrl(productMessage(product.name, pack))} target="_blank" rel="noopener noreferrer" aria-label={`Enquire on WhatsApp about ${product.name}, ${pack}`}><span className={styles.orderLabel}><WhatsAppIcon />Enquire now</span><span aria-hidden="true">↗</span></a>
    </div>
  </article>;
}
