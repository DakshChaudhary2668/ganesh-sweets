"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/whatsapp";

export default function EnquiryForm() {
  const [error, setError] = useState("");
  return <form className="enquiry-form" onSubmit={(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const details = String(data.get("details") || "").trim();
    if (!name || !/^[+\d\s()-]{8,18}$/.test(phone) || !details) { setError("Please add your name, a valid phone number and order details."); return; }
    setError("");
    const type = String(data.get("type") || "").trim();
    const message = `Namaste Ganesh Sweets, I am ${name}. My phone number is ${phone}.${type ? ` I am enquiring about ${type}.` : ""} ${details}`;
    window.location.href = whatsappUrl(message);
  }}>
    <div className="form-row"><label>Full name <input name="name" autoComplete="name" required /></label><label>Mobile number <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required /></label></div>
    <label>Order type <input name="type" placeholder="For example, wedding sweets" /></label>
    <label>Tell us about your enquiry <textarea name="details" rows={5} placeholder="Occasion, quantity and preferred date" required /></label>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="button button-primary" type="submit">Continue on WhatsApp <span aria-hidden="true">↗</span></button>
    <p className="form-help">Your message opens in WhatsApp for your review before you send it.</p>
  </form>;
}
