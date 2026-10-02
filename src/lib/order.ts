import { PRODUCTS, WA_NUMBER, type Product } from "./config";

export type Quantities = Record<Product["sku"], number>;

export const EMPTY_ORDER: Quantities = { "500": 0, "750": 0 };

export function brl(n: number): string {
  return "R$ " + n.toFixed(2).replace(".", ",");
}

export function orderTotal(qty: Quantities): number {
  return PRODUCTS.reduce((sum, p) => sum + qty[p.sku] * p.price, 0);
}

export function bottleCount(qty: Quantities): number {
  return PRODUCTS.reduce((sum, p) => sum + qty[p.sku], 0);
}

export function buildMessage(qty: Quantities): string {
  const lines = ["Olá! Quero fazer um pedido do Ritorno alle Origini:", ""];
  for (const p of PRODUCTS) {
    if (qty[p.sku] > 0) lines.push(`• ${qty[p.sku]} × ${p.label} — ${brl(qty[p.sku] * p.price)}`);
  }
  const total = orderTotal(qty);
  if (total > 0) lines.push("", "Total das garrafas: " + brl(total));
  else lines.push("(ainda não escolhi as quantidades, pode me ajudar?)");
  lines.push("", "Meu nome: ");
  return lines.join("\n");
}

export function waLink(text: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

/** Ex.: "500 mL R$ 89 · 750 mL R$ 119" */
export const PRICE_SUMMARY = PRODUCTS.map((p) => `${p.label} R$ ${p.price}`).join(" · ");
