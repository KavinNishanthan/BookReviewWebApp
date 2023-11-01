import { Header } from '../../components/UtilComponents/BookHeader';
import booksimage from '../../assets/attraction/Home_Bg.jpeg';
import BookInput from '../../components/FormComponents/BookInput';
import { BookCard } from '../../components/UtilComponents/BookCard';

export function Home() {
  return (
    <div className=" bg-gray-100">
      <div>{<Header />}</div>
      <div className="">
        <div className="relative bg-cover bg-no-repeat">
          <img src={booksimage} alt="Background Image" />
          <div className="absolute top-[70.9%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
            <BookInput
              className="rounded-md border border-gray-200 mb-2 w-[35rem] h-12 pl-4 text-sm transparent"
              name="book name"
              type="text"
              placeholder="Which Book are You Looking for...?"
              value={''}
              onChange={() => {}}
            />
          </div>
        </div>
        <div className="mt-5 mb-10  h-screen">
          <div className="">
            <BookCard />
          </div>
        </div>
      </div>
    </div>
  );
}
