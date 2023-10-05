"use client";
import { useState } from "react";
import { VlogPlayer } from "./VlogPlayer";
import { useWindowListener } from "@/hooks/useWindowListener";

export function PromoteCard() {
  const [playing, setPlaying] = useState(true);

  useWindowListener("contextmenu", (e) => {
    e.preventDefault();
  });

  return (
    <div
      className="w-[80%] shadow-lg my-10 p-2 rounded-lg 
        bg-gray-200 flex flex-row
    "
    >
      <VlogPlayer vdoSrc="/video/getvaccine.mp4" isPlaying={playing} />
      <div className="m-5 flex flex-col justify-between">
        Get your vaccine today.
        <button
          className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
       text-white shadow-sm"
          onClick={() => {
            setPlaying(!playing);
          }}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
