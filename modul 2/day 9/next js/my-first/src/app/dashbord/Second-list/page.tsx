import BookList from "@/components/book.list";
export default async function Page() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-12">Product List</h1>
      <BookList />
    </div>
  );
}
