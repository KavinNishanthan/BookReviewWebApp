import { useNavigate } from 'react-router-dom';

export function BookCard({ books }: any) {
  const navigate = useNavigate();

  console.log(books);
  if (!books || !Array.isArray(books)) {
    console.error('Invalid or missing "books" prop:', books);
    return null;
  }

  const handleButtonClick = (bookId: string) => {
    navigate(`/review/${bookId}`);
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book: any) => (
          <div key={book.bookId}>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={book.imageUrl}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-2xl font-bold text-white mb-1">{book.title}</h1>
                <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h1 className="mb-1">Author : {book.author}</h1>
                  <hr />
                  <p>One Line Story : {book.oneLineStory}</p>
                  <hr />
                  <h1 className="mb-1">Categories : {book.category}</h1>
                </p>
                <button
                  className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60"
                  onClick={() => {
                    handleButtonClick(book.bookId);
                  }}
                >
                  See Review
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
