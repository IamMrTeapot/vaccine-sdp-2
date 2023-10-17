import HospitalCatalog from "@/components/hospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default function HospitalPage() {
  const hospitals = getHospitals();

  return (
    <main className="p-5">
      <h1 className="text-center text-5xl font-thin">Hospital List</h1>
      <Suspense
        fallback={
          <p>
            Loading ... <LinearProgress />
          </p>
        }
      >
        <HospitalCatalog hospitalJson={hospitals} />
      </Suspense>
    </main>
  );
}
