import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { whatsappUrl } from "@/lib/whatsapp";

export default function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div><div className="footer-brand"><Image src="/brand/ganesh-sweets-logo.png" alt="" width={56} height={56} /><span>Ganesh Sweets</span></div><p>Traditional sweets and home foods<br />from Vijayawada, since 1995.</p></div>
      <div><h2>Explore</h2><Link href="/products">All sweets</Link><Link href="/services">Services</Link><Link href="/about">Our story</Link><Link href="/contact">Visit us</Link></div>
      <div><h2>Visit</h2><p>{business.address}<br />{business.landmark}</p><p>{business.hours}</p></div>
      <div><h2>Talk to us</h2><a href={`tel:+${business.whatsapp}`}>{business.phone}</a><a href={whatsappUrl("Namaste Ganesh Sweets, I would like to make an enquiry.")} target="_blank" rel="noopener noreferrer">WhatsApp enquiry ↗</a><a href={`mailto:${business.email}`}>{business.email}</a></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Ganesh Sweets</span><span>Made with care in Vijayawada</span></div>
  </footer>;
}
