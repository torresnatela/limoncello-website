import styles from "./HowToServe.module.css";

const SERVES = [
  {
    name: "Liscio",
    text: "Puro, 40 a 50 mL, direto do congelador, em copo pequeno previamente resfriado. É como se bebe na costa, depois do jantar.",
  },
  {
    name: "Spritz",
    text: "50 mL de limoncello, 100 mL de espumante brut bem gelado, um dedo de água com gás, gelo e uma tira de casca de limão.",
  },
  {
    name: "Sour",
    text: "50 mL de limoncello, 20 mL de limão siciliano fresco, uma colher de clara. Bata sem gelo, depois com gelo, e coe.",
  },
];

export function HowToServe() {
  return (
    <section id="servir" aria-labelledby="servir-t">
      <div className="wrap">
        <div className="head narrow">
          <span className="eyebrow">Il dopocena</span>
          <h2 id="servir-t">Como servir</h2>
          <p className="lead">
            A garrafa mora no congelador — a 30% ela não congela, só fica densa. O copo vai junto, uns vinte
            minutos antes. E nunca com gelo dentro: o gelo derrete e dilui o que levou dois anos para ficar no
            ponto.
          </p>
        </div>
        <div className={styles.serves}>
          {SERVES.map((s) => (
            <article key={s.name} className={styles.serve}>
              <h3 className={styles.t}>{s.name}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
