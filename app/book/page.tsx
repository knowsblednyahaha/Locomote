import Header from "../components/Book/Header";
import SearchBooking from "../components/Book/BookSearch/SearchBooking";

export default async function page() {
  return (
    <>
      <Header />
      <SearchBooking />
    </>
  );
}
