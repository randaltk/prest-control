import styles from "../styles/Home.module.scss";
import Image from "next/image";
import posthog from "posthog-js";

import { useRouter } from "next/router";
export default function Home() {
  if (typeof window !== "undefined") {
    posthog.init("phc_iUCwqO9iWx1wUiUOsPDbcbJkoZ6xM4NaM0oNI31G9hE", {
      api_host: "https://app.posthog.com",
    });
  }
  const router = useRouter();
  const routeChange = (e, item) => {
    let path = "";

    if (item === "locacao") {
      path = "locacao";
    } else if (item === "assistencia") {
      path = "assistencia-tecnica";
    } else {
      path = "vendas";
    }
    e.preventDefault();
    router.push(path);
  };

  return (
    <>
      <div>
        <section className={styles.sessaoSobre}>
          <div className={styles.contentPresentation}>
            <div className={styles.sessaoWindPower}>
              <div className={styles.contentBanner}>
                <Image
                  src="https://res.cloudinary.com/aguadeira/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1685368997/FTM/feira-wind-power-edit_ccrqjh.jpg"
                  alt="Inspeção"
                  width={438.08}
                  height={350.38}
                />
              </div>
              <div className={styles.sessaoWindPower}>
                <div className={styles.borderStyle}></div>
                <h2 className={styles.title}>
                  Prest Control na feira Wind Power !
                </h2>
                <p className={styles.description}>
                  Entre os dias 12 e 14 de Setembro ocorrerá o maior evento de
                  energia eólica da américa latina, a Wind Power.{" "}
                  <p>
                    O evento será no parque de exposições São Paulo Expo.{" "}
                    <a
                      target="_blank"
                      href="https://www.google.com.br/maps/place/S%C3%A3o+Paulo+Expo/@-23.6460103,-46.6322313,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5adda4c3cb95:0x31916ce58f719167!8m2!3d-23.6460103!4d-46.6296564!16s%2Fg%2F122q9t55?entry=ttu"
                    >
                      <img
                        width={30}
                        height={30}
                        alt="Localizacao"
                        src="https://res.cloudinary.com/aguadeira/image/upload/v1685242685/FTM/pinoteste_1_1_jg8cqk.png"
                      />
                    </a>
                  </p>
                  <p>
                    Clique{" "}
                    <a
                      href="https://www.brazilwindpower.com.br/pt/home.html"
                      className={styles.btnClick}
                      target="_blank"
                    >
                      aqui{" "}
                    </a>{" "}
                    e acesse o link da feira !
                  </p>
                </p>
              </div>
            </div>
            <div className={styles.sessaoSobree}>
              {" "}
              <div className={styles.contentBanner}>
                <Image
                  src="https://res.cloudinary.com/aguadeira/image/upload/v1636984632/FTM/691ece7e-a649-411e-b2ab-2c21fac7006e_1_zvmemj.jpg"
                  alt="Inspeção"
                  width={438.08}
                  height={350.38}
                />
              </div>
              <div className={styles.sessaoContent}>
                <div className={styles.borderStyle}></div>
                <h2 className={styles.title}>Sobre</h2>
                <p className={styles.description}>
                  A FTM é uma empresa especializada na Fabricação e Locação de
                  equipamentos hidráulicos de alta pressão; Chaves de torque,
                  tensionadores e projetos especiais que proporcionam facilidade
                  e confiabilidade a diversas procedimentos de montagens
                  industriais, onde há a necessidade de torqueamento ou
                  tensionamento controlado, através de modernas ferramentas
                  fabricadas dentro dos mais rígidos padrões de qualidade da
                  Industria 4.0.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={styles.sessaoServicos}
          style={{ marginBottom: "200px", marginTop: "10%" }}
        >
          <div>
            <h2 className={styles.title}>Serviços e Produtos</h2>
            {/* <p className={styles.descriptionServicos}>
              Equipamentos hidráulicos de alta pressão.
            </p> */}
          </div>

          <div className={styles.cards}>
            <div
              className={styles.cardsContent}
              onClick={(e) => routeChange(e, "locacao")}
            >
              <Image
                className={styles.cardsContentImg}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1636987518/FTM/80567124-1081-433c-883d-d01e0214cfa3_1_h4sccd.jpg"
                alt="Caldeiras"
                width={578}
                height={640}
              />
              <div className={styles.cardsDescription}>
                <h3>Locação de Máquinas e Ferramentas</h3>
                <p>
                  Por que alugar?
                  <ul className={styles.detail}>
                    <li className={styles.topic}>
                      Disponibilidade imediata dos Equipamentos.
                    </li>
                    <li className={styles.topic}>
                      Facilidade de Gerenciamento
                    </li>
                    <li className={styles.topic}>Benefício Fiscal</li>
                    <li className={styles.topic}>Facilidade de Contratação</li>
                  </ul>
                </p>
              </div>
            </div>

            <div
              className={styles.cardsContent}
              onClick={(e) => routeChange(e, "venda")}
            >
              <Image
                className={styles.cardsContentImg}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1636987443/FTM/venda_1_z2kkkn.jpg"
                alt="Válvulas"
                width={578}
                height={640}
              />
              <div className={styles.cardsDescription}>
                <h3>Venda de Máquinas e Ferramentas</h3>
                <p>
                  Oferecemos equipamentos genuinamente nacional, com tecnologia
                  comparado aos equipamentos importados. Equipamentos Calibrados
                  RBC com garantias superiores comparado ao que o mercado
                  oferece.
                </p>
              </div>
            </div>
          </div>
          <section
            style={{
              marginBottom: "200px",
              marginTop: "10%",
              textAlign: "center",
            }}
            className={styles.sessaoServicos}
          >
            <h2 className={styles.title}>Seguimentos de atuação</h2>
            <div style={{ textAlign: "center" }}>
              <ul className={styles.detail2}>
                <li className={styles.topic}>Celulose e papel</li>
                <li className={styles.topic}>Construção Civil</li>
                <li className={styles.topic}>Energia Eólica</li>
                <li className={styles.topic}>Geração de energia</li>
                <li className={styles.topic}>Indústria alimenticia</li>
                <li className={styles.topic}>Metalurgica</li>
                <li className={styles.topic}>Petróleo e gás</li>
                <li className={styles.topic}>Petroquimica</li>
                <li className={styles.topic}>Quimica e Farmaceuica</li>
                <li className={styles.topic}>Usinas de açucar e alcool</li>
              </ul>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
