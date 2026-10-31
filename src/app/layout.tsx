import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { business } from "@/data/business";
import "@/styles/globals.scss";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ganeshsweets.in"),
  title: { default: "Ganesh Sweets | Traditional Mithai in Vijayawada", template: "%s | Ganesh Sweets" },
  description: "Explore Ganesh Sweets' traditional sweets, home foods and gifting enquiries in Vijayawada. Established in 1995.",
  alternates: { canonical: "/" },
  openGraph: { title: "Ganesh Sweets", description: "Traditional sweets and home foods from Vijayawada.", images: ["/images/kaju-katli.png"] },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: business.name,
  url: "https://www.ganeshsweets.in",
  telephone: business.phone,
  email: business.email,
  address: { "@type": "PostalAddress", streetAddress: "Bhagat Singh Rd, Srinagar, Satyaranayana Puram", addressLocality: "Vijayawada", addressRegion: "Andhra Pradesh", postalCode: "520011", addressCountry: "IN" },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "09:00", closes: "22:00" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: "try{document.documentElement.dataset.intro=sessionStorage.getItem('ganesh-intro-v2')==='1'||matchMedia('(prefers-reduced-motion: reduce)').matches?'skip':'play'}catch(e){document.documentElement.dataset.intro='skip'}" }} /></head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
