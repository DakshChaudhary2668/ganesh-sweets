import { business } from "@/data/business";

export function whatsappUrl(message: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function productMessage(name: string, pack: string) {
  return `Namaste Ganesh Sweets, I would like to enquire about ${name} (${pack}). Quantity: [please specify]. Please confirm availability and the final price.`;
}

export function serviceMessage(service: string) {
  return `Namaste Ganesh Sweets, I would like to enquire about ${service}. Please share the current options and ordering details.`;
}
