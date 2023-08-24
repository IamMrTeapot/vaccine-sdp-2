import Banner from "@/components/Banner";
import VaccineCard from "@/components/VaccineCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.pageBackground}></div>
      <Banner />
      <div className={styles.content}>
        <VaccineCard />
        <VaccineCard />
        <VaccineCard />
        <VaccineCard />
      </div>
    </main>
  );
}
