import BookingForm from "@/components/BookingForm";

export default function Booking() {
  return (
    <main className="w-full h-full">
      <div className="w-full h-full flex flex-col items-center py-10 gap-4">
        <BookingForm />
      </div>
    </main>
  );
}
