import styles from "./vaccinecard.module.css";
import Image from "next/image";
import localFont from "next/font/local";

const stardewFont = localFont({
  src: "../../public/fonts/Stardew_Valley_Regular.ttf",
});

export default function VaccineCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src="/img/vaccine1.jpg"
          alt="vaccine picture"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className={styles.cardDetail}>
        <div>
          <div className={`${styles.cardTitle} ${stardewFont.className}`}>
            ValorRestorer Serum
          </div>
          <div className={styles.cardDescription}>
            A groundbreaking healing vaccine. Beyond healing, it grants an
            ephemeral yet empowering boost to strength. Swift recovery plus a
            surge of might - all within a vial. Unleash the inner titan; be
            unbreakable.
          </div>
        </div>
      </div>
    </div>
  );
}
