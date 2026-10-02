import styles from "./Ingredients.module.css";

const INGREDIENTS = [
  {
    name: "Água",
    text: "Leva o licor ao teor final e define corpo, textura e como ele se comporta gelado.",
  },
  { name: "Açúcar", text: "O suficiente para arredondar, nunca para esconder." },
  {
    name: "Infusão hidroalcoólica",
    text: "Extrai os óleos essenciais da casca ao longo de semanas de descanso.",
  },
  {
    name: "Casca de limão siciliano",
    text: "Cortada fresca a cada produção. Só a parte externa: o branco amarga.",
  },
];

export function Ingredients() {
  return (
    <section className={`dark ${styles.section}`} aria-labelledby="ingredientes">
      <div className="wrap">
        <div className="head narrow">
          <span className="eyebrow">O que tem dentro</span>
          <h2 id="ingredientes">A lista inteira cabe numa linha</h2>
        </div>
        <ul className={styles.list}>
          {INGREDIENTS.map((i) => (
            <li key={i.name}>
              <span className={styles.k}>{i.name}</span>
              <span className={styles.v}>{i.text}</span>
            </li>
          ))}
        </ul>
        <p className={styles.note}>Sem aroma artificial. Sem corante. Sem concentrado. Sem conservante.</p>
      </div>
    </section>
  );
}
