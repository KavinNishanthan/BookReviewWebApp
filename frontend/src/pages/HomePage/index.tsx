import { SetStateAction, useEffect, useState } from 'react';
import booksimage from '../../assets/attraction/Home_Bg.jpeg';

// Importing components
import BookInput from '../../components/FormComponents/BookInput';
import { BookCard } from '../../components/UtilComponents/BookCard';

export default function Home() {
  const [books, setBooks] = useState();
  const [filteredBooks, setFilteredBooks] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/book/fetch-book')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
      })
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  const handleSearch = (term: SetStateAction<string>) => {
    setSearchTerm(term);

    const filtered = books.filter((book: { title: string }) => book.title.toLowerCase().includes(term.toLowerCase()));

    setFilteredBooks(filtered);
  };

  return (
    <div className=" bg-gray-100">
      <div className="">
        <div className="relative bg-cover bg-no-repeat">
          <img src={booksimage} alt="Background Image" />
          <div className="absolute top-[70.9%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
            <BookInput
              className=" text-black rounded-md border-gray-200 mb-2 w-[35rem] h-12 pl-4 text-sm "
              name="book name"
              type="text"
              placeholder="Which Book are You Looking for...?"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-5 mb-10  h-screen">
          <div className="">
            <BookCard books={filteredBooks} />
          </div>
        </div>
      </div>
    </div>
  );
}
