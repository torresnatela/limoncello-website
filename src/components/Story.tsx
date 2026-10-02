import Image from "next/image";
import rotulo from "../../public/images/rotulo.jpg";
import styles from "./Story.module.css";

export function Story() {
  return (
    <section className="dark" aria-labelledby="historia">
      <div className="wrap">
        <div className="head narrow">
          <span className="eyebrow">A história</span>
          <h2 id="historia">Uma nonna, em Positano</h2>
        </div>
        <div className={styles.duo}>
          <Image
            src={rotulo}
            alt="Detalhe do rótulo, com a costa italiana na janela em ogiva"
            placeholder="blur"
            sizes="(min-width: 1080px) 450px, (min-width: 820px) 42vw, 100vw"
            className={styles.img}
          />
          <div className="stack">
            <p>
              Sergio Calonge passou mais de quinze anos à frente de uma indústria de água mineral. Mas o que ele
              queria fazer não estava em nenhuma linha de produção — estava numa lembrança de viagem que ele não
              conseguia reproduzir.
            </p>
            <p>
              Foram várias viagens à Itália, não uma. Sorrento, onde os limões pesam na mão. A Costa Amalfitana.
              Capri. A Sicília. Dezenas de rótulos provados em enoteca, em trattoria, em balcão de vila. Quase
              todos doces demais, ou com um limão que parecia ter vindo de vidro, não de árvore.
            </p>
            <p>
              Positano se sobe a pé, pelos vicoli — becos de escada estreitos, muros de cal, limoeiros passando
              por cima. Foi ali, longe de qualquer loja, que ele chegou à casa de uma nonna que fazia limoncello
              havia mais tempo do que se dava ao trabalho de contar.
            </p>
            <p>Ela serviu. Ele provou. E entendeu, no primeiro gole, o que faltava em todos os outros.</p>
            <p className={styles.pull}>Ela mostrou. Ele anotou.</p>
            <p>
              De volta ao Brasil, foram mais de dois anos e centenas de versões — cada uma provada, anotada e
              descartada — até uma que ele não quis mudar mais. É essa que está na garrafa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
