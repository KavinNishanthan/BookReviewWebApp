export function BookCard() {
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Comics.jpg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white mb-1">The Haunting of Hill House</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="mb-1">Author : Shirley Jackson</h1>
              <hr />
              <p>One Line Story : A menacing house's dark secrets torment those who dare to stay</p>
              <hr />
              <h1 className="mb-1">Categories : Horror</h1>
            </p>
            <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
              See Review
            </button>
          </div>
        </div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Comics.jpg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white mb-1">The Haunting of Hill House</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="mb-1">Author : Shirley Jackson</h1>
              <hr />
              <p>One Line Story : A menacing house's dark secrets torment those who dare to stay</p>
              <hr />
              <h1 className="mb-1">Categories : Horror</h1>
            </p>
            <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
              See Review
            </button>
          </div>
        </div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Comics.jpg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white mb-1">The Haunting of Hill House</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="mb-1">Author : Shirley Jackson</h1>
              <hr />
              <p>One Line Story : A menacing house's dark secrets torment those who dare to stay</p>
              <hr />
              <h1 className="mb-1">Categories : Horror</h1>
            </p>
            <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
              See Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
