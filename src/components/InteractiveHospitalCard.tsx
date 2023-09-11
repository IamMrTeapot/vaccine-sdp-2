"use client";

export default function InteractiveHospitalCard({
  children,
}: {
  children: React.ReactNode;
}) {
  function onMouseAction(event: React.SyntheticEvent) {
    if (event.type === "mouseover") {
      event.currentTarget.classList.remove("shadow-lg");
      event.currentTarget.classList.remove("bg-white");
      event.currentTarget.classList.add("shadow-xl");
      event.currentTarget.classList.add("bg-neutral-200");
    } else {
      event.currentTarget.classList.remove("shadow-xl");
      event.currentTarget.classList.remove("bg-neutral-200");
      event.currentTarget.classList.add("shadow-lg");
      event.currentTarget.classList.add("bg-white");
    }
  }

  return (
    <div
      className="w-[80vw] h-[150px] flex rounded-xl overflow-hidden bg-white shadow-lg"
      onMouseOver={(e) => {
        onMouseAction(e);
      }}
      onMouseOut={(e) => {
        onMouseAction(e);
      }}
    >
      {children}
    </div>
  );
}
