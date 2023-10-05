import Image from "next/image";

export default function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const mockHospitalRepo = new Map();
  mockHospitalRepo.set("1", {
    name: "Chulalongkorn Hospital",
    imgSrc: "/img/chula.jpg",
  });
  mockHospitalRepo.set("2", {
    name: "Rajavithi Hospital",
    imgSrc: "/img/rajavithi.jpg",
  });
  mockHospitalRepo.set("3", {
    name: "Thammasat University Hospital",
    imgSrc: "/img/thammasat.jpg",
  });

  return (
    <main className="p-5 flex flex-col items-center justify-center">
      <h1 className="text-lg text-center font-medium">
        Hospital ID : {params.hid}
      </h1>
      <div className="flex flex-col my-5 items-center">
        <Image
          src={mockHospitalRepo.get(params.hid).imgSrc}
          alt="Hospital Image"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30vw] bg-black"
        />
        <div className="text-lg my-5 font-extrabold">
          {mockHospitalRepo.get(params.hid).name}
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return [{ hid: "1" }, { hid: "2" }, { hid: "3" }];
}
