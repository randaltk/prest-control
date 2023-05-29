import Image from "next/image";
import styles from "../../styles/Topbar.module.scss";
import Link from "next/dist/client/link";

const Topbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoMetalPev}>
            <Link href="/">
              <Image
                layout="fill"
                src="https://res.cloudinary.com/aguadeira/image/upload/v1684020663/copia_nr0sjo.png"
                alt="Prest-Control - Equipamentos Hidráulicos de Alta Pressão"
              />
            </Link>
          </div>

          <div className={styles.item}>
            <div style={{ display: " flex" }}>
              <span>
                <b>Matriz:(11)5521-5403</b>
              </span>
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
                <b>Filial:</b> (84) 3272-5689 | 3644-8487 (Parnamirim - RN)
              </span>
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
            <span>contato@prestcontrol.com.br</span>
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
