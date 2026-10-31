import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import { business } from "@/data/business";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Contact & Store", description: "Visit Ganesh Sweets in Satyaranayana Puram, Vijayawada, or enquire by phone and WhatsApp.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return <main id="main-content"><div className="page-intro"><div className="container"><span className="eyebrow">Visit us</span><h1>Come by for something sweet.</h1><p>Find our Vijayawada store, or send us an enquiry about sweets and gifting.</p></div></div>
    <section className="section"><div className="container contact-grid"><div><span className="eyebrow">Our store</span><h2>Satyaranayana Puram, Vijayawada.</h2><dl><div><dt>Address</dt><dd>{business.address}<br />{business.landmark}</dd></div><div><dt>Hours</dt><dd>{business.hours}</dd></div><div><dt>Phone & WhatsApp</dt><dd><a href={`tel:+${business.whatsapp}`}>{business.phone}</a></dd></div><div><dt>Email</dt><dd><a href={`mailto:${business.email}`}>{business.email}</a></dd></div></dl><div className="contact-actions"><a className="button button-primary" href={business.directions} target="_blank" rel="noopener noreferrer">Get directions <span aria-hidden="true">↗</span></a><a className="button button-outline" href={whatsappUrl("Namaste Ganesh Sweets, I would like to make an enquiry.")} target="_blank" rel="noopener noreferrer">WhatsApp us <span aria-hidden="true">↗</span></a></div></div><div className="contact-form-wrap"><span className="eyebrow">Make an enquiry</span><h2>Tell us what you’re planning.</h2><EnquiryForm /></div></div></section>
  </main>;
}
