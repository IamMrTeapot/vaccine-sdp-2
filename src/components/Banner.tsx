"use client";
import styles from "./banner.module.css";
import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

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
  const router = useRouter();
  const { data: session } = useSession()

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
        <div className={`${styles.bannerTextContainer} flex flex-col`}>
          { session ? <div className="z-[30] text-[saddlebrown]
           font-bold my-2">Hello! {session.user?.name}
           </div> : null}
          <div className={`${styles.bannerText} ${stardewFont.className}`}>
            Vaccine Reservation
          </div>
          <button
            className="z-10 bg-[saddlebrown] text-white border 
          border-white font-semibold p-2 m-2 rounded
          hover:bg-white hover:text-[saddlebrown] hover:border-transparent
          "
            onClick={(e) => {
              e.stopPropagation();
              router.push("/hospital");
            }}
          >
            Pick Your Hospital Here!
          </button>
        </div>
      </div>
    </div>
  );
}
