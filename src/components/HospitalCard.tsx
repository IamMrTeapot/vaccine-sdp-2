import localFont from "next/font/local";
import Image from "next/image";
import InteractiveHospitalCard from "./InteractiveHospitalCard";
import { Rating } from "@mui/material";

const stardewFont = localFont({
  src: "../../public/fonts/Stardew_Valley_Regular.ttf",
});

export default function HospitalCard({
  hospitalName,
  imgSrc,
  ratingValue,
  dispatchRating,
}: {
  hospitalName: string;
  imgSrc: string;
  ratingValue?: number;
  dispatchRating?: Function;
}) {
  return (
    <InteractiveHospitalCard>
      <div className="w-[50%] relative">
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
        {dispatchRating && (
          <div
            className="py-2"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Rating
              value={ratingValue}
              onChange={(e, newValue) => {
                dispatchRating({ type: "change", hospitalName, newValue });
              }}
              precision={0.5}
            />
          </div>
        )}
      </div>
    </InteractiveHospitalCard>
  );
}
