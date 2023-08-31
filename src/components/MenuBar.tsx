import Image from "next/image";
import MenuItem from "./MenuItem";

export default function MenuBar() {
  return (
    <div className="h-[75px] w-full bg-blue-300 flex flex-row justify-end gap-6 items-center fixed top-0 left-0 z-10">
      <MenuItem />
      <Image
        src="/img/logo.jpg"
        alt="Logo"
        className="h-[100%] w-auto object-cover"
        width={0}
        height={0}
        sizes="100%"
      />
    </div>
  );
}
