"use client";

import Image from "next/image";
import { MAX_QTY, PRODUCTS } from "@/lib/config";
import { brl, buildMessage, orderTotal, waLink } from "@/lib/order";
import { WhatsAppIcon } from "../WhatsAppIcon";
import { useOrder } from "./OrderProvider";
import styles from "./Order.module.css";

export function OrderSection() {
  const { qty, change } = useOrder();

  return (
    <section id="pedir" className={styles.section} aria-labelledby="pedir-t">
      <div className="wrap">
        <div className="head narrow">
          <span className="eyebrow">Peça a sua</span>
          <h2 id="pedir-t">Monte seu pedido</h2>
          <p className="lead">
            Escolha os formatos e a quantidade. Ao finalizar, abre nosso WhatsApp com o pedido já escrito — a
            gente confirma o frete e a forma de pagamento por lá.
          </p>
        </div>

        <div className={styles.prods}>
          {PRODUCTS.map((p) => (
            <div key={p.sku} className={styles.prod}>
              <Image src={p.image} alt={p.alt} sizes="84px" className={styles.prodImg} />
              <div className={styles.info}>
                <span className={styles.name}>{p.label}</span>
                <span className={styles.spec}>Vidro transparente &middot; 30% vol.</span>
                <span className={styles.price}>{brl(p.price)}</span>
                <div className={styles.qty}>
                  <button
                    type="button"
                    onClick={() => change({ sku: p.sku, step: -1 })}
                    disabled={qty[p.sku] === 0}
                    aria-label={`Diminuir quantidade de ${p.label}`}
                  >
                    −
                  </button>
                  <output aria-live="polite" aria-label={`Quantidade de ${p.label}`}>
                    {qty[p.sku]}
                  </output>
                  <button
                    type="button"
                    onClick={() => change({ sku: p.sku, step: 1 })}
                    disabled={qty[p.sku] === MAX_QTY}
                    aria-label={`Aumentar quantidade de ${p.label}`}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.total}>
          <span className={styles.lbl}>Total do pedido</span>
          <span className={styles.val}>{brl(orderTotal(qty))}</span>
        </div>
        <p className={styles.hint}>Frete e forma de pagamento combinados no WhatsApp.</p>

        <div className={styles.btnRow}>
          <a className="btn" href={waLink(buildMessage(qty))} target="_blank" rel="noopener">
            <WhatsAppIcon />
            Finalizar pedido no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
