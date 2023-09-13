"use client";
import styles from "./banner.module.css";
import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";

const stardewFont = localFont({
  src: "../../public/fonts/Stardew_Valley_ALL_CAPS.ttf",
});

export default function Banner() {
  const covers = [
    "/img/cover1.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className={styles.bannerContainer} onClick={() => setIndex(index + 1)}>
      <div className={styles.bannerImage}>
        <Image
          src={covers[index % covers.length]}
          alt="page-cover"
          fill={true}
          objectFit="cover"
          priority
          className="cursor-pointer"
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
          <div className={`${styles.bannerText} ${stardewFont.className}`}>
            Vaccine Reservation
          </div>
        </div>
      </div>
    </div>
  );
}
