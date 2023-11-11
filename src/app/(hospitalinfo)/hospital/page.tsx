import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddHospitalForm from "@/components/AddHospitalForm";
import HospitalCatalog from "@/components/hospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import getUserProfile from "@/libs/getUserProfile";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

export default async function HospitalPage() {
  const hospitals = getHospitals();

  const session = await getServerSession(authOptions);
  const profile =
    !session || !session.user.token
      ? { data: { role: "any" } }
      : await getUserProfile(session?.user.token);

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
      {profile.data.role === "admin" && <AddHospitalForm />}
    </main>
  );
}
