"use client";
import { useReducer } from "react";
import HospitalCard from "./HospitalCard";

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

  return (
    <div className="flex flex-col items-center gap-[20px] py-[70px]">
      <HospitalCard
        hospitalName="Chulalongkorn Hospital"
        imgSrc="/img/chula.jpg"
        ratingValue={ratingList.get("Chulalongkorn Hospital") ?? 0}
        dispatchRating={dispatchRating}
      />
      <HospitalCard
        hospitalName="Rajavithi Hospital"
        imgSrc="/img/rajavithi.jpg"
        ratingValue={ratingList.get("Rajavithi Hospital") ?? 0}
        dispatchRating={dispatchRating}
      />
      <HospitalCard
        hospitalName="Thammasat University Hospital"
        imgSrc="/img/thammasat.jpg"
        ratingValue={ratingList.get("Thammasat University Hospital") ?? 0}
        dispatchRating={dispatchRating}
      />
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
