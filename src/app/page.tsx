import Image from "next/image";
import Link from "next/link";
import HeroAura from "@/components/HeroAura";
import Intro from "@/components/Intro";
import ProductCard from "@/components/ProductCard";
import HeritageMotif from "@/components/HeritageMotif";
import HomeMotion from "@/components/HomeMotion";
import TrustIcon from "@/components/TrustIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { categories, featured } from "@/data/products";
import { business } from "@/data/business";
import { serviceMessage, whatsappUrl } from "@/lib/whatsapp";
import styles from "./page.module.scss";

const categoryImages: Record<string, string> = {
  "Traditional Sweets": "/images/kaja.png", "Ghee Specials": "/images/mysore-pak.png",
  "Premium Sweets": "/images/kaju-katli.png", "Festival Specials": "/images/gulab-jamun.png",
  "Home Foods": "/images/ariselu.png", "Hot Snacks": "/images/murukku.png",
};

export default function Home() {
  return <>
    <Intro />
    <HomeMotion />
    <main id="main-content">
      <section className={styles.hero}>
        <HeroAura />
        <HeritageMotif className={styles.ornamentTop} />
        <HeritageMotif className={styles.ornamentBottom} />
        <div className={`${styles.heroInner} container`}>
          <div className={styles.heroCopy}><span className="eyebrow" data-hero-enter>Traditional · Pure · Timeless</span><h1 tabIndex={-1} data-hero-enter>A legacy of <br /><span>sweetness since 1995</span></h1><p data-hero-enter>Traditional Indian sweets and home foods, made for everyday joys and celebrations in Vijayawada.</p><div className={styles.actions} data-hero-enter><Link href="/products" className={`${styles.heroPrimary} button button-primary`}><WhatsAppIcon />Explore Sweets</Link><Link href="#gifting" className={`${styles.heroSecondary} button button-outline`}>Festive Gifting <span aria-hidden="true">→</span></Link></div></div>
          <div className={styles.heroVisual}><div className={styles.photoFrame} data-hero-photo><Image src="/images/kaju-katli.png" alt="Kaju sweets arranged on a traditional tray" fill loading="eager" fetchPriority="high" sizes="(max-width: 780px) 100vw, 60vw" /></div></div>
        </div>
        <div className={`${styles.proof} container`}><div className={styles.proofItem}><TrustIcon kind="recipe" /><div><strong>Traditional Recipes</strong><small>Rooted in tradition</small></div></div><div className={styles.proofItem}><TrustIcon kind="foods" /><div><strong>Sweets & Home Foods</strong><small>From our collection</small></div></div><div className={styles.proofItem}><TrustIcon kind="location" /><div><strong>Made in Vijayawada</strong><small>Serving you since 1995</small></div></div><div className={styles.proofItem}><TrustIcon kind="occasion" /><div><strong>For Every Occasion</strong><small>Everyday to festive</small></div></div></div>
      </section>

      <section className={styles.categories} id="categories"><HeritageMotif className={styles.categoryOrnament} /><div className={`${styles.categoryContainer} container`}><div className={styles.categoryHeading}><h2>Shop by Category</h2><p>Explore our range of traditional sweets and home foods.</p></div><div className={styles.categoryGrid}>{categories.map((name) => <Link key={name} href={`/products?category=${encodeURIComponent(name)}`} className={styles.categoryCard}><div className={styles.categoryVisual}><Image src={categoryImages[name]} alt="" fill sizes="(max-width: 600px) 30vw, 16vw" /></div><div><strong>{name}</strong><span aria-hidden="true">→</span></div></Link>)}</div></div></section>

      <section className={`${styles.signatures} section`}><div className="container"><div className="section-head"><div><span className="eyebrow">Selected from our catalogue</span><h2>Signature sweets</h2></div><Link href="/products" className="button button-outline">View all sweets <span aria-hidden="true">→</span></Link></div><div className={styles.productGrid}>{featured.map((product) => <ProductCard key={product.name} product={product} />)}</div></div></section>

      <section id="gifting" className={styles.gifting}><div className={`${styles.giftingInner} container`}><div><span className="eyebrow">Celebrations · Togetherness</span><h2>Gifting happiness, beautifully.</h2><p>Ganesh Sweets offers gift boxes for festive occasions, weddings and teams. Ask us about the current selection, packaging and order details.</p><a className="button button-light" href={whatsappUrl(serviceMessage("Festival Gift Boxes"))} target="_blank" rel="noopener noreferrer">Enquire about gift boxes <span aria-hidden="true">↗</span></a></div><div className={styles.giftingMark} aria-hidden="true"><Image src="/brand/ganesh-sweets-logo.png" alt="" width={300} height={300} /></div></div></section>

      <section id="sankranti-home-foods" className={styles.sankranti}><div className={`${styles.sankrantiInner} container`}><div><span className="eyebrow">Seasonal collection</span><h2>Sankranti Home Foods</h2></div><div><p>Explore traditional home foods for the season. Browse the collection and enquire about what is currently available.</p><Link href="/products?category=Home%20Foods" className="text-link">Explore home foods <span aria-hidden="true">↗</span></Link></div></div></section>

      <section className="section"><div className={`${styles.story} container`}><div className={styles.storyImage} data-reveal><Image src="/images/mysore-pak.png" alt="Mysore Pak served with ghee" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className={styles.storyCopy} data-reveal><span className="eyebrow">Our story</span><h2>Rooted in tradition. Made for generations.</h2><p>Since 1995, Ganesh Sweets has been part of Vijayawada’s celebrations. Our collection brings together traditional mithai, home foods and the flavours families return to.</p><Link href="/about" className="button button-outline">Discover our story <span aria-hidden="true">→</span></Link></div></div></section>

      <section className={styles.visit}><div className={`${styles.visitInner} container`}><div><span className="eyebrow">Visit us</span><h2>Come by for something sweet.</h2></div><div><p>{business.address}<br />{business.landmark}</p><p>{business.hours}</p><Link href="/contact" className="button button-primary">Store & contact <span aria-hidden="true">→</span></Link></div></div></section>
    </main>
  </>;
}
