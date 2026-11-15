"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AgeGate.module.css";

/** Chave no localStorage que lembra a confirmação de maioridade. */
export const AGE_KEY = "origini-age-ok";

/**
 * Roda no <head> antes da primeira pintura: se o visitante já confirmou
 * a idade, marca o <html> para que a trava nem apareça (sem "piscar").
 */
export const AGE_GATE_SCRIPT = `try{if(localStorage.getItem("${AGE_KEY}")==="1")document.documentElement.dataset.age="ok"}catch(e){}`;

export function AgeGate() {
  const [open, setOpen] = useState(true);
  const [denied, setDenied] = useState(false);
  const yesRef = useRef<HTMLButtonElement>(null);

  // Quem já confirmou nem vê a trava (o CSS a esconde via html[data-age="ok"]).
  useEffect(() => {
    if (document.documentElement.dataset.age !== "ok") yesRef.current?.focus();
  }, []);

  function confirm() {
    try {
      localStorage.setItem(AGE_KEY, "1");
    } catch {
      // Navegação privada / storage bloqueado: libera só nesta visita.
    }
    document.documentElement.dataset.age = "ok";
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className={styles.gate}
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      aria-describedby="age-gate-desc"
    >
      <div className={styles.card}>
        <div className={styles.brand}>
          <span className={styles.sm}>Ritorno alle</span>
          <span className={styles.lg}>ORIGINI</span>
        </div>
        <div className={styles.p18} aria-hidden="true">
          +18
        </div>

        {denied ? (
          <>
            <h2 id="age-gate-title" className={styles.title}>
              Acesso não permitido
            </h2>
            <p id="age-gate-desc" className={styles.text}>
              Este site é destinado apenas a maiores de 18 anos. Volte quando atingir a maioridade.
            </p>
            <button type="button" className={styles.back} onClick={() => setDenied(false)}>
              Voltar
            </button>
          </>
        ) : (
          <>
            <h2 id="age-gate-title" className={styles.title}>
              Você tem 18 anos ou mais?
            </h2>
            <p id="age-gate-desc" className={styles.text}>
              Este site contém informações sobre bebida alcoólica e é destinado apenas a maiores de 18 anos.
            </p>
            <div className={styles.actions}>
              <button ref={yesRef} type="button" className={styles.yes} onClick={confirm}>
                Sim, tenho 18 anos ou mais
              </button>
              <button type="button" className={styles.no} onClick={() => setDenied(true)}>
                Não
              </button>
            </div>
          </>
        )}

        <p className={styles.legal}>Aprecie com moderação. Se for dirigir, não beba.</p>
      </div>
    </div>
  );
}
