"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/whatsapp";
import styles from "./Header.module.scss";
import WhatsAppIcon from "./WhatsAppIcon";

const links = [
  ["Home", "/"], ["Sweets", "/products"], ["Home Foods", "/products?category=Home%20Foods"], ["Gifting", "/#gifting"],
  ["Services", "/services"], ["Our Story", "/about"], ["Contact", "/contact"],
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        <Link href="/" className={styles.brand} aria-label="Ganesh Sweets home">
          <span className={styles.mark}><Image src="/brand/ganesh-sweets-logo.png" alt="" width={64} height={64} loading="eager" /></span>
          <span><strong>Ganesh Sweets</strong><small>VIJAYAWADA · SINCE 1995</small></span>
        </Link>
        <nav id="primary-nav" className={`${styles.nav} ${open ? styles.open : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)} aria-current={pathname === href ? "page" : undefined} className={pathname === href ? styles.active : ""}>{label}</Link>
          ))}
          <a className={`${styles.mobileEnquire} button button-primary`} href={whatsappUrl("Namaste Ganesh Sweets, I would like to make an enquiry.")} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp <span aria-hidden="true">↗</span></a>
        </nav>
        <Link href="/products#catalogue-search" className={styles.search} aria-label="Search the catalogue"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg></Link>
        <a className={`${styles.enquire} button button-primary`} href={whatsappUrl("Namaste Ganesh Sweets, I would like to make an enquiry.")} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />Enquire on WhatsApp</a>
        <button className={styles.menu} type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
