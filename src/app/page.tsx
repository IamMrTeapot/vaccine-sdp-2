import Banner from "@/components/Banner";
import { PromoteCard } from "@/components/PromoteCard";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="flex flex-row justify-center">
        <PromoteCard />
      </div>
    </main>
  );
}
