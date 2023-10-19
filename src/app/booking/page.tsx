import BookingForm from "@/components/BookingForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {

  const session = await getServerSession(authOptions)
  if(!session || !session.user.token) return <div>Please Login First</div>

  const profile = await getUserProfile(session.user.token)
  var createdAt = new Date(profile.data.createdAt)

  return (
    <main className="w-full h-full">
      { profile && <div className="bg-slate-m-5 p-5 text-2xl">
          <div>Name : {profile.data.name}</div>
          <div>Email : {profile.data.email}</div>
          <div>Tel : {profile.data.tel}</div>
          <div>Member since : {(new Date(profile.data.createdAt)).toString()}</div>
        </div>}
      <div className="w-full h-full flex flex-col items-center py-10 gap-4">
        <BookingForm />
      </div>
    </main>
  );
}
