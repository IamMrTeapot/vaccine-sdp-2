import Banner from "@/components/Banner";
import styles from "./page.module.css";
import HospitalCard from "@/components/HospitalCard";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className={styles.content}>
        <HospitalCard
          hospitalName="Chulalongkorn Hospital"
          imgSrc="/img/chula.jpg"
        />
        <HospitalCard
          hospitalName="Rajavithi Hospital"
          imgSrc="/img/rajavithi.jpg"
        />
        <HospitalCard
          hospitalName="Thammasat University Hospital"
          imgSrc="/img/thammasat.jpg"
        />
      </div>
    </main>
  );
}
