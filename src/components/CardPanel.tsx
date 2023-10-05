"use client";
import { useReducer } from "react";
import HospitalCard from "./HospitalCard";
import Link from "next/link";

export default function CardPanel() {
  const ratingReducer = (
    ratingList: Map<string, number>,
    action: { type: string; hospitalName: string; newValue: number }
  ) => {
    switch (action.type) {
      case "change": {
        return new Map<string, number>(
          ratingList.set(action.hospitalName, action.newValue)
        );
      }
      case "reset": {
        return new Map<string, number>(ratingList.set(action.hospitalName, 0));
      }
      default: {
        return ratingList;
      }
    }
  };

  const [ratingList, dispatchRating] = useReducer(
    ratingReducer,
    new Map<string, number>([
      ["Chulalongkorn Hospital", 0],
      ["Rajavithi Hospital", 0],
      ["Thammasat University Hospital", 0],
    ])
  );

  //Mock Data
  const mockHospitalList = [
    { hid: 1, name: "Chulalongkorn Hospital", imgSrc: "/img/chula.jpg" },
    { hid: 2, name: "Rajavithi Hospital", imgSrc: "/img/rajavithi.jpg" },
    {
      hid: 3,
      name: "Thammasat University Hospital",
      imgSrc: "/img/thammasat.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-[20px] py-[70px]">
      {mockHospitalList.map((hospital) => {
        return (
          <Link href={`/hospital/${hospital.hid}`}>
            <HospitalCard
              hospitalName={hospital.name}
              imgSrc={hospital.imgSrc}
              ratingValue={ratingList.get(hospital.name) ?? 0}
              dispatchRating={dispatchRating}
            />
          </Link>
        );
      })}
      <div className="text-2xl font-sans">Rating List</div>
      {Array.from(ratingList.entries()).map(([key, value]) => {
        return (
          value !== 0 && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                dispatchRating({
                  type: "reset",
                  hospitalName: key,
                  newValue: 0,
                });
              }}
              className="cursor-pointer text-lg font-serif"
            >
              {key} : {value}
            </div>
          )
        );
      })}
    </div>
  );
}
