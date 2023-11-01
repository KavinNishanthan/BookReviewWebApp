import BookButton from '../../FormComponents/BookButton';

export function Header() {
  return (
    <>
      <div className="flex items-center justify-between pt-2 pr-8 pl-8 pb-2 bg-white ">
        <div className="text-4xl">Critique.</div>
        <div>
          <ul className="flex">
            <li>Home</li>
            <li className="pl-10 pr-10">Categories</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <BookButton
            className=" bg-red-600 text-white font-bold py-2 w-[6rem] rounded-lg"
            children="Logout"
            type="submit"
            onClick={() => {}}
          />
        </div>
      </div>
    </>
  );
}
