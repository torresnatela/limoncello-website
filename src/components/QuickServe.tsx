import styles from "./QuickServe.module.css";

const TIPS = [
  { value: "−18 °C", label: "direto do congelador" },
  { value: "45 mL", label: "dose curta" },
  { value: "Copo gelado", label: "nunca com gelo dentro" },
];

export function QuickServe() {
  return (
    <div className={styles.quick}>
      <div className={`wrap ${styles.inner}`}>
        <p className={styles.title}>Está com a garrafa na mão? Sirva assim.</p>
        <dl className={styles.list}>
          {TIPS.map((t) => (
            <div key={t.value}>
              <dt>{t.value}</dt>
              <dd>{t.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
