import Image from "next/image";
import Link from "next/link";
import HeroAura from "@/components/HeroAura";
import Intro from "@/components/Intro";
import ProductCard from "@/components/ProductCard";
import HeritageMotif from "@/components/HeritageMotif";
import HeritageIllustration from "@/components/HeritageIllustration";
import HomeMotion from "@/components/HomeMotion";
import TrustIcon from "@/components/TrustIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { featured } from "@/data/products";
import styles from "./page.module.scss";

const homeCategories = [
  { name: "Mithai", href: "/products?category=Traditional%20Sweets" },
  { name: "Dry Sweets", href: "/products?category=Premium%20Sweets" },
  { name: "Home Foods", href: "/products?category=Home%20Foods" },
  { name: "Savouries", href: "/products?category=Hot%20Snacks" },
  { name: "Festival Specials", href: "/products?category=Festival%20Specials" },
  { name: "Gift Boxes", href: "/services" },
];

export default function Home() {
  return <>
    <Intro />
    <HomeMotion />
    <main id="main-content" className={styles.home}>
      <section className={styles.hero}>
        <HeroAura />
        <HeritageMotif className={styles.ornamentTop} />
        <HeritageMotif className={styles.ornamentBottom} />
        <div className={`${styles.heroInner} container`}>
          <div className={styles.heroCopy}><span className="eyebrow" data-hero-enter>Traditional · Pure · Timeless</span><h1 tabIndex={-1} data-hero-enter>A legacy of <br /><span>sweetness since 1995</span></h1><p data-hero-enter>Authentic Indian sweets, crafted with premium ingredients and time-honoured recipes in Vijayawada.</p><div className={styles.actions} data-hero-enter><Link href="/products" className={`${styles.heroPrimary} button button-primary`}><WhatsAppIcon />Explore Sweets</Link><Link href="/about" className={`${styles.heroSecondary} button button-outline`}>Our Story <span aria-hidden="true">→</span></Link></div></div>
          <div className={styles.heroVisual}><div className={styles.photoFrame} data-hero-photo><Image src="/images/reference-hero.webp" alt="Kaju sweets and laddoos arranged on a festive brass tray" fill loading="eager" fetchPriority="high" sizes="(max-width: 780px) 100vw, 60vw" /></div></div>
        </div>
        <div className={`${styles.proof} container`}><div className={styles.proofItem}><TrustIcon kind="recipe" /><div><strong>Authentic Recipes</strong><small>Rooted in tradition</small></div></div><div className={styles.proofItem}><TrustIcon kind="foods" /><div><strong>Premium Ingredients</strong><small>Rich taste, always</small></div></div><div className={styles.proofItem}><TrustIcon kind="location" /><div><strong>Made in Vijayawada</strong><small>With love since 1995</small></div></div><div className={styles.proofItem}><TrustIcon kind="occasion" /><div><strong>For Every Occasion</strong><small>Everyday to festive</small></div></div></div>
      </section>

      <section className={styles.categories} id="categories"><HeritageMotif className={styles.categoryOrnament} /><div className={`${styles.categoryContainer} container`}><div className={styles.categoryHeading}><h2>Shop by Category</h2><p>Explore our wide range of traditional sweets, home foods and specialities.</p></div><div className={styles.categoryGrid}>{homeCategories.map(({ name, href }, index) => <Link key={name} href={href} className={styles.categoryCard}><div className={styles.categoryVisual}><Image src={`/images/reference-category-${index + 1}.webp`} alt="" fill sizes="(max-width: 600px) 30vw, 16vw" /></div><div><strong>{name}</strong><span aria-hidden="true">→</span></div></Link>)}</div></div></section>

      <section className={`${styles.signatures} section`}><div className="container"><div className="section-head"><div><span className="eyebrow">Selected from our catalogue</span><h2>Signature sweets</h2></div><Link href="/products" className="button button-outline">View all sweets <span aria-hidden="true">→</span></Link></div><div className={styles.productGrid}>{featured.map((product) => <ProductCard key={product.name} product={product} compact />)}</div></div></section>

      <section id="gifting" className={styles.festival}>
        <HeritageMotif className={styles.festivalOrnament} />
        <Image src="/images/reference-festival.webp" alt="Festive laddoos with flowers and brass lamps" fill sizes="100vw" />
        <div className={styles.festivalCopy}><span className="eyebrow">Festivals · Celebrations · Togetherness</span><h2>Festive Sweets<br />for Every Occasion</h2><p>Traditional sweets to make your festivals<br />and celebrations even more special.</p><Link className="button button-light" href="/products?category=Festival%20Specials">Explore Festival Specials <span aria-hidden="true">→</span></Link></div>
      </section>

      <section className={styles.storySection}><HeritageIllustration /><div className={`${styles.story} container`}><div className={styles.storyImage} data-reveal><Image src="/images/storefront.webp" alt="Ganesh Sweets storefront with its maroon sign and striped awning" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className={styles.storyCopy} data-reveal><span className="eyebrow">Our story</span><h2>Rooted in Tradition.<br />Made for Generations.</h2><p>Since 1995, Ganesh Sweets has been part of Vijayawada’s celebrations. Our collection brings together traditional mithai, home foods and the flavours families return to.</p><Link href="/about" className="button button-outline">Our Journey <span aria-hidden="true">→</span></Link></div></div></section>

      <section className={styles.why}><div className="container"><h2>Why Choose Ganesh Sweets</h2><div className={styles.whyGrid}>
        <div><TrustIcon kind="recipe" /><span><strong>Trusted Since 1995</strong><small>A legacy of tradition</small></span></div>
        <div><TrustIcon kind="foods" /><span><strong>Authentic Taste</strong><small>Time-honoured recipes</small></span></div>
        <div><TrustIcon kind="occasion" /><span><strong>For Every Occasion</strong><small>Everyday joys to celebrations</small></span></div>
        <div><TrustIcon kind="location" /><span><strong>Vijayawada’s Own</strong><small>Made with love, since 1995</small></span></div>
      </div></div></section>

    </main>
  </>;
}
