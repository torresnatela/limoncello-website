"use client";

import { bottleCount, brl, orderTotal, PRICE_SUMMARY } from "@/lib/order";
import { useOrder } from "./OrderProvider";
import styles from "./Order.module.css";

export function StickyBar() {
  const { qty } = useOrder();
  const total = orderTotal(qty);
  const n = bottleCount(qty);

  return (
    <div className={styles.bar}>
      <div className={styles.barText} aria-live="polite">
        <b>{total > 0 ? brl(total) : "Monte seu pedido"}</b>
        <span>{total > 0 ? `${n} ${n === 1 ? "garrafa" : "garrafas"}` : PRICE_SUMMARY}</span>
      </div>
      <a className={`btn ${styles.barBtn}`} href="#pedir">
        Pedir
      </a>
    </div>
  );
}
