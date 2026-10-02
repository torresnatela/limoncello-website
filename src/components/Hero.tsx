import Image from "next/image";
import hero from "../../public/images/hero.jpg";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <header className={styles.hero}>
      <Image
        src={hero}
        alt="Garrafa de Ritorno alle Origini num terraço sobre a costa italiana"
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className={styles.img}
      />
      <div className={styles.veil} />
      <div className={styles.inner}>
        <div className={styles.sm}>Ritorno alle</div>
        <h1 className={styles.lg}>ORIGINI</h1>
        <div className={styles.sub}>Limoncello</div>
        <p className={styles.line}>O gosto de uma tarde na Costa Amalfitana.</p>
        <div className={styles.meta}>Licor fino de limão siciliano &middot; 30% vol.</div>
      </div>
    </header>
  );
}
