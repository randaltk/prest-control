import Image from "next/image";
import styles from "../../styles/Topbar.module.scss";

const Topbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoMetalPev}>
            <a href="/">
              <Image
                layout="fill"
                src="https://res.cloudinary.com/aguadeira/image/upload/v1679712626/prestcontrol/WhatsApp_Image_2023-03-07_at_11.06.51__1_-removebg-preview_bytr6r.png"
                alt="Prest-Control - Equipamentos Hidráulicos de Alta Pressão"
                className={styles.image}
              />
            </a>
          </div>

          <div className={styles.item}>
            <div style={{ display: " flex" }}>
              <span>
                <b>Fábrica (Matriz):</b> 11 5522-6264{" "}
              </span>
              <span style={{ marginLeft: "0.5em" }}>| 11 2574-5782 </span>
            </div>

            <Image
              src="https://res.cloudinary.com/aguadeira/image/upload/v1623681451/FTM/pngegg_1_yo4wa3.png"
              alt="Tel"
              width={22}
              height={22}
            />
            <div className={styles.separator}></div>
          </div>

          <div className={styles.item}>
            <div style={{ display: "flex" }}>
              <span>
                <b>Comercial (filial):</b> 11 2304-5873
              </span>
              <span style={{ marginLeft: "0.5em" }}>| 11 2304-2767 </span>
            </div>

            <Image
              src="https://res.cloudinary.com/aguadeira/image/upload/v1623681451/FTM/pngegg_1_yo4wa3.png"
              alt="Tel"
              width={22}
              height={22}
            />
            <div className={styles.separator}></div>
          </div>

          <div className={styles.item}>
            <span>contato@ftm.net.br</span>
            <Image
              src="https://res.cloudinary.com/aguadeira/image/upload/v1621877390/public/584856b4e0bb315b0f7675ac_1_1_kd0wv4.png"
              alt="Email"
              width={28}
              height={28}
            />
            <div
              style={{ border: "1px solid transparent" }}
              className={styles.separator}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Topbar;
