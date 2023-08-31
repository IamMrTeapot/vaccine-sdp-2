import localFont from "next/font/local";
import Image from "next/image";

const stardewFont = localFont({
  src: "../../public/fonts/Stardew_Valley_Regular.ttf",
});

export default function HospitalCard({
  hospitalName,
  imgSrc,
}: {
  hospitalName: string;
  imgSrc: string;
}) {
  return (
    <div
      className={
        "w-[80vw] h-[150px] flex rounded-xl overflow-hidden bg-white shadow-lg"
      }
    >
      <div className="w-[20%] h-full relative">
        <Image
          src={imgSrc}
          alt="vaccine picture"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col p-[20px] w-[80%]">
        <div
          className={`text-3xl font-bold text-blue-500 tracking-wider ${stardewFont.className}`}
        >
          {hospitalName}
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          architecto cupiditate illo sint blanditiis omnis temporibus totam
          soluta. Accusamus, nulla itaque laboriosam quaerat reprehenderit
          eligendi dolores autem a quidem totam.
        </div>
      </div>
    </div>
  );
}
