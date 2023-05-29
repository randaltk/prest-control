import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/Header.module.scss";

const Header = ({ click }) => {
  var images = [
    "https://res.cloudinary.com/aguadeira/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1685384473/prestcontrol/pexels-kindel-media-9800102_b45nju.jpg",
  ];

  const sliderRef = useRef();

  useEffect(() => {
    var i = 0;
    setInterval(function () {
      sliderRef.current.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i = 0;
      }
    }, 5000);
  }, []);

  function currentSlide(number) {
    if (number === 1) {
      sliderRef.current.style.backgroundImage = "url(" + images[0] + ")";
    }
  }
  return (
    <>
      <header className={styles.headerStyle} ref={sliderRef}>
        <div className={styles.linearGradient}>
          <div className={styles.headerNavigation}>
            <div className={styles.logoMetalPev2}>
              <Link href="/">
                <Image
                  width={232}
                  height={65}
                  src="https://res.cloudinary.com/aguadeira/image/upload/v1684021272/prestcontrol/copia_pxagws.png"
                  alt="Prest-Control - Equipamentos Hidráulicos de Alta Pressão"
                />
              </Link>
            </div>
            <div className={styles.headerMenu}>
              <div className={styles.menuIconToggleMenu} onClick={click}>
                ≡
              </div>

              <nav className={styles.mobileHidden}>
                <ul>
                  <li className={styles.navItem}>
                    <Link href="/">Home </Link>
                  </li>
                  <li className={styles.navItem}>
                    <a href="#quem-somos">Quem Somos</a>
                  </li>

                  <li className={styles.navItem}>
                    <Link href="/locacao">Locação</Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/vendas">Vendas</Link>
                  </li>

                  <li className={styles.navItem}>
                    <Link href="/assistencia-tecnica">Assistência Técnica</Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/galeria">Galeria</Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/contato">Contato</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <section className={styles.headerContent}>
            <div className={styles.textCard}>
              <h2 className={styles.title}>"Soluções em torque controlado"</h2>

              <p className={styles.description}></p>
              <Link href="/contato">
                <button
                  className={styles.btnDefault}
                  style={{ marginTop: "4rem" }}
                >
                  Solicitar orçamento
                  <img
                    src="https://res.cloudinary.com/aguadeira/image/upload/v1621722710/public/Arrow_4_heq4na.png"
                    alt="Arrow"
                    width={9}
                    height={8}
                  />
                </button>
              </Link>
            </div>

            <div className={styles.dotBox}>
              <span
                className={styles.dot}
                onClick={() => currentSlide(1)}
              ></span>
            </div>
          </section>
          <div className={styles.container}>
            <img
              className={styles.item}
              src="https://res.cloudinary.com/aguadeira/image/upload/v1642427393/FTM/vendas/ftm-f_3_kuu0uu.jpg"
            />

            <img
              className={styles.item}
              src="https://res.cloudinary.com/aguadeira/image/upload/v1642440765/FTM/vendas/fch_pdkaxz.jpg"
            />

            <img
              className={styles.item}
              src="https://res.cloudinary.com/aguadeira/image/upload/v1643071441/FTM/vendas/ftmumiljha_1_r9ftdo.png"
            />

            <img
              className={styles.item}
              src="https://res.cloudinary.com/aguadeira/image/upload/v1643132201/FTM/vendas/Sem_t%C3%ADtulo_elt6rg.png"
            />
            <img
              className={styles.item}
              src="https://res.cloudinary.com/aguadeira/image/upload/v1646250935/FTM/vendas/WhatsApp_Image_2022-03-02_at_16.51.07_1_fjv6vo.jpg"
            />
            <img
              className={styles.item}
              src="https://res.cloudinary.com/aguadeira/image/upload/v1646222433/FTM/vendas/tensionadorwind_1_b2pnsr.png"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
