import localFont from "next/font/local";
import Link from "next/link";

const stardewFont = localFont({
  src: "../../public/fonts/Stardew_Valley_ALL_CAPS.ttf",
});

export default function MenuItem() {
  const title = "Booking";
  return (
    <div
      className={`px-8 text-white ${stardewFont.className} font-bold tracking-widest text-2xl`}
    >
      <Link href={"/booking"}>{title}</Link>
    </div>
  );
}
