import styles from "./banner.module.css";
import Image from "next/image";
import localFont from "next/font/local";

const StardewFont = localFont({
  src: "../../public/fonts/Stardew_Valley_ALL_CAPS.ttf",
});

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerImage}>
        <Image
          src="/img/hospital.jpg"
          alt="page-cover"
          fill={true}
          objectFit="cover"
          priority
        />
      </div>
      <div className={styles.bannerTextBackground}>
        <Image
          src="/img/detailBox.png"
          alt="tex-background"
          fill={true}
          objectFit="cover"
          priority
        />
        <div className={styles.bannerTextContainer}>
          <div className={`${styles.bannerText} ${StardewFont.className}`}>
            Vaccine Reservation
          </div>
        </div>
      </div>
    </div>
  );
}
