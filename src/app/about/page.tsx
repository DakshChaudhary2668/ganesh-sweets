import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Our Story", description: "The Ganesh Sweets story began in Vijayawada in 1995. Explore our traditional sweets and home foods.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return <main id="main-content"><div className="page-intro"><div className="container"><span className="eyebrow">Our story</span><h1>Rooted in tradition. Made for generations.</h1><p>Ganesh Sweets has been part of Vijayawada’s celebrations since 1995.</p></div></div>
    <section className="section"><div className="container about-grid"><div><span className="eyebrow">Since 1995</span><h2>A legacy of sweetness.</h2><p>Ganesh Sweets began in Vijayawada in 1995. Today the catalogue brings together mithai and home foods for everyday sharing and special occasions.</p><p>Our current range includes familiar favourites, ghee specials, regional home foods and savoury snacks.</p><Link href="/products" className="button button-primary">Explore the collection <span aria-hidden="true">→</span></Link></div><div className="about-image"><Image src="/images/kaju-katli.png" alt="Kaju sweets on a traditional tray" fill sizes="(max-width: 800px) 100vw, 50vw" /></div></div></section>
    <section className="about-principles"><div className="container"><span className="eyebrow">What guides us</span><h2>Traditional taste, carefully presented.</h2><div><article><span>01</span><h3>Heritage recipes</h3><p>Sweets shaped by the flavours families have known for generations.</p></article><article><span>02</span><h3>Celebrations</h3><p>Products and enquiries for everyday visits, festivals and important occasions.</p></article><article><span>03</span><h3>Vijayawada</h3><p>A local store and a story that began here in 1995.</p></article></div></div></section>
  </main>;
}
