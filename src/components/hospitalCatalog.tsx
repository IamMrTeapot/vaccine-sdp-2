import Link from "next/link";
import HospitalCard from "./HospitalCard";

export default async function HospitalCatalog({
  hospitalJson,
}: {
  hospitalJson: any;
}) {
  const hospitalReady = await hospitalJson;

  return (
    <div className="m-[20px] flex flex-col items-center gap-4 p-[10px]">
      {hospitalReady.data.map((hospitalItem: any) => {
        return (
          <Link href={`/hospital/${hospitalItem.id}`} key={hospitalItem.id}>
            <HospitalCard
              hospitalName={hospitalItem.name}
              imgSrc={hospitalItem.picture}
            />
          </Link>
        );
      })}
    </div>
  );
}
