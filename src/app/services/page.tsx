import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/business";
import { serviceMessage, whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Services & Gifting", description: "Enquire about festival gift boxes, wedding sweets, bulk orders and other Ganesh Sweets services.", alternates: { canonical: "/services" } };

export default function ServicesPage() {
  return <main id="main-content"><div className="page-intro"><div className="container"><span className="eyebrow">For every occasion</span><h1>Thoughtful sweets for moments together.</h1><p>From a family gathering to a larger celebration, tell us what you have in mind and we’ll share the current options.</p></div></div>
    <section className="section"><div className="container"><div className="services-grid">{services.map(([name, description], index) => <article id={name.toLowerCase().replaceAll(" ", "-")} key={name} className="service-card"><span className="service-number">{String(index + 1).padStart(2, "0")}</span><h2>{name}</h2><p>{description}</p><a href={whatsappUrl(serviceMessage(name))} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp <span aria-hidden="true">↗</span></a></article>)}</div></div></section>
    <section className="service-note"><div className="container"><div><span className="eyebrow">A note on gifting</span><h2>Looking for a gift box?</h2><p>Gift boxes are part of our offering. Current assortments, packaging, prices and lead times are confirmed directly with the store.</p></div><a className="button button-light" href={whatsappUrl(serviceMessage("Festival Gift Boxes"))} target="_blank" rel="noopener noreferrer">Ask about gift boxes <span aria-hidden="true">↗</span></a></div></section>
    <div className="container interior-end"><p>Prefer to speak with us another way?</p><Link className="button button-outline" href="/contact">Visit our contact page <span aria-hidden="true">→</span></Link></div>
  </main>;
}
