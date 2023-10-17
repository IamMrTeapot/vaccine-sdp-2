import Image from "next/image";
import getHospital from "@/libs/getHospital";

export default async function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const hospitalDetail = await getHospital(params.hid);
  return (
    <main className="p-5 flex flex-col items-center justify-center">
      <div className="flex flex-col my-5 items-center">
        <Image
          src={hospitalDetail.data.picture}
          alt="Hospital Image"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30vw] bg-black"
        />
        <div className="text-lg my-5 font-extrabold">
          {hospitalDetail.data.name}
        </div>
        <div className="text-m text-center">
          {hospitalDetail.data.address}
          <br />
          {hospitalDetail.data.district}
          <br />
          {hospitalDetail.data.province}
          <br />
          {hospitalDetail.data.postalcode}
          <br />
          {hospitalDetail.data.tel}
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return [{ hid: "1" }, { hid: "2" }, { hid: "3" }];
}
