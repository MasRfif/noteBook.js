export default async function Page({ params }) {
  try {
    const response = await fetch(`https://gutendex.com/books/${params.id}/`);
    const book = await response.json();

    return (
      <div className="bg-gray-100 p-4 rounded-md shadow-sm">
        <h1 className="text-gray-800 text-xl font-bold mb-2">{book.title}</h1>
        <p className="text-gray-600">{book.authors[0].name}</p>
        <p className="text-gray-600">{book.download_count} downloads</p>
        <ul className="list-none">
          {book.subjects.map((item: string, index: number) => (
            <li key={index} className="text-gray-500 text-sm mb-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {}
}
