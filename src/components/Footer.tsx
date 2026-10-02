import { EMAIL, INSTAGRAM_URL } from "@/lib/config";
import { waLink } from "@/lib/order";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.inner}>
          <div>
            <div className={styles.brand}>RITORNO ALLE ORIGINI</div>
            <div className={styles.desc}>
              Limoncello &middot; Licor fino de limão siciliano
              <br />
              30% vol. &middot; 500 mL e 750 mL
            </div>
            <div className={styles.p18} aria-label="Proibido para menores de 18 anos">
              +18
            </div>
          </div>
          <nav aria-label="Contato">
            <div className={styles.colT}>Contato</div>
            <ul className={styles.links}>
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <a href={waLink("Olá! Vim pelo site do Ritorno alle Origini.")} target="_blank" rel="noopener">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener">
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Navegação">
            <div className={styles.colT}>Como servir</div>
            <ul className={styles.links}>
              <li>
                <a href="#servir">Temperatura e doses</a>
              </li>
              <li>
                <a href="#pedir">Fazer um pedido</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.legal}>
          Venda proibida para menores de 18 anos. Aprecie com moderação. Se for dirigir, não beba.
          <br />
          Produto brasileiro. Receita desenvolvida a partir das viagens de estudo do produtor à Itália.
        </div>
      </div>
    </footer>
  );
}
