import type { StaticImageData } from "next/image";
import garrafa500 from "../../public/images/garrafa-500.jpg";
import garrafa750 from "../../public/images/garrafa-750.jpg";

/**
 * Número de WhatsApp que recebe os pedidos.
 * Formato internacional, só dígitos: 55 + DDD + número.
 * Atual: (31) 99866-1090
 */
export const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? "5531998661090";

export const SITE_URL = "https://origini.bhz.br";
export const EMAIL = "sac@origini.bhz.br";
export const INSTAGRAM_URL = "https://www.instagram.com/";

export const MAX_QTY = 99;

export type Product = {
  sku: "500" | "750";
  label: string;
  price: number;
  image: StaticImageData;
  alt: string;
};

export const PRODUCTS: Product[] = [
  { sku: "500", label: "500 mL", price: 89, image: garrafa500, alt: "Garrafa de 500 mL" },
  { sku: "750", label: "750 mL", price: 119, image: garrafa750, alt: "Garrafa de 750 mL" },
];
