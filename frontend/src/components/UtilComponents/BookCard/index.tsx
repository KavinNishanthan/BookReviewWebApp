import { Link } from 'react-router-dom';

export function BookCard() {
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://bookreviewagile.s3.us-west-1.amazonaws.com/Books/City+of+ruin.jpeg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white mb-1">City of Ruin</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="mb-1">Author : Charissa Weaks</h1>
              <hr />
              <p>One Line Story : A young man's life is shattered when his family is killed in a car accident, and he must find a way to rebuild his life in the ruins of his past</p>
              <hr />
              <h1 className="mb-1">Categories : Fiction</h1>
            </p>
            <Link to="/review">
              <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                See Review
              </button>
            </Link>
          </div>
        </div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://bookreviewagile.s3.us-west-1.amazonaws.com/Books/Brad+taylor.jpeg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white mb-1">The Devil's Ransom: A Pike Logan Novel</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="mb-1">Author : Brad Taylor</h1>
              <hr />
              <p>One Line Story : When a brother dies in a mysterious accident, she must turn to devil himself</p>
              <hr />
              <h1 className="mb-1">Categories : Horror</h1>
            </p>
            <Link to="/review">
              <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                See Review
              </button>
            </Link>
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
            <h1 className="font-dmserif text-3xl font-bold text-white mb-1">The Last Last-Day-of-Summer</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="mb-1">Author : Lamar Giles</h1>
              <hr />
              <p>One Line Story : The last last-day-of-summer is a timeless adventure wrapped in the echoes of fleeting moments</p>
              <hr />
              <h1 className="mb-1">Categories : Sci-fi</h1>
            </p>
            <Link to="/review">
              <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                See Review
              </button>
            </Link>
          </div>
        </div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://bookreviewagile.s3.us-west-1.amazonaws.com/Books/Embers+in+the+snow.jpeg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white mb-1">Embers in the Snow</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="mb-1">Author : Anna Carven</h1>
              <hr />
              <p>One Line Story : Embers in the snow whispered tales of warmth surrendered to the hush of winter's embrace</p>
              <hr />
              <h1 className="mb-1">Categories : Romance</h1>
            </p>
            <Link to="/review">
              <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                See Review
              </button>
            </Link>
          </div>
        </div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://bookreviewagile.s3.us-west-1.amazonaws.com/Books/Fire+in+the+Flesh.jpeg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white mb-1">A Fire in the Flesh: A Flesh and Fire Novel</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="mb-1">Author : Jennifer L. Armentrout</h1>
              <hr />
              <p>One Line Story : In the dance of passion, a fire in the flesh ignited the soul's uncharted realms</p>
              <hr />
              <h1 className="mb-1">Categories : Sci-fi</h1>
            </p>
            <Link to="/review">
              <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                See Review
              </button>
            </Link>
          </div>
        </div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://bookreviewagile.s3.us-west-1.amazonaws.com/Books/Mark+greaney.jpeg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white mb-1">Burner</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="mb-1">Author : Mark Greaney</h1>
              <hr />
              <p>One Line Story : In the realm of secrets, a burner phone whispered tales only shadows could decode</p>
              <hr />
              <h1 className="mb-1">Categories : Thriller</h1>
            </p>
            <Link to="/review">
              <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                See Review
              </button>
            </Link>
          </div>
        </div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://bookreviewagile.s3.us-west-1.amazonaws.com/Books/Night+of+the+witch.jpeg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white mb-1">Night of the Witch</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="mb-1">Author : Sara Raasch</h1>
              <hr />
              <p>One Line Story : Shadows whispered secrets as the moon cast spells on the mystic dance of darkness</p>
              <hr />
              <h1 className="mb-1">Categories : Paranormal</h1>
            </p>
            <Link to="/review">
              <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                See Review
              </button>
            </Link>
          </div>
        </div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://bookreviewagile.s3.us-west-1.amazonaws.com/Books/The+popppy+war.jpeg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white mb-1">The Poppy War</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="mb-1">Author : R.F. Kuang</h1>
              <hr />
              <p>One Line Story : In the crucible of war, Rin's journey unfolds, forging her from a war orphan into a wielder of devastating power</p>
              <hr />
              <h1 className="mb-1">Categories : Fantasy</h1>
            </p>
            <Link to="/review">
              <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                See Review
              </button>
            </Link>
          </div>
        </div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://bookreviewagile.s3.us-west-1.amazonaws.com/Books/The+son+of+neptune.jpeg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white mb-1">The Son of Neptune</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="mb-1">Author : Rick Riordan</h1>
              <hr />
              <p>One Line Story : In the shadows of forgotten memories, the son of Neptune emerged, wielding both storms and secrets</p>
              <hr />
              <h1 className="mb-1">Categories : Fantasy</h1>
            </p>
            <Link to="/review">
              <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                See Review
              </button>
            </Link>
          </div>
        </div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://bookreviewagile.s3.us-west-1.amazonaws.com/Books/The+Titans+curse.jpeg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white mb-1">The Titan's Curse</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="mb-1">Author : Rick Riordan</h1>
              <hr />
              <p>One Line Story : Percy Jackson and his friends embarks on a perilous journey</p>
              <hr />
              <h1 className="mb-1">Categories : Fantasy</h1>
            </p>
            <Link to="/review">
              <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                See Review
              </button>
            </Link>
          </div>
        </div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://bookreviewagile.s3.us-west-1.amazonaws.com/Books/The+wholf+and+the+witch.jpeg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white mb-1">The Wolf and the Witch</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="mb-1">Author : Charissa Weaks</h1>
              <hr />
              <p>One Line Story : A young woman's quest to break a curse leads her to a mysterious wolf and an ancient prophecy</p>
              <hr />
              <h1 className="mb-1">Categories : Fantasy</h1>
            </p>
            <Link to="/review">
              <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                See Review
              </button>
            </Link>
          </div>
        </div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://bookreviewagile.s3.us-west-1.amazonaws.com/Books/What+the+river+knows.jpeg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white mb-1">What the River Knows: A Novel</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="mb-1">Author : Isabel Ibañez</h1>
              <hr />
              <p>One Line Story : Whispers in the language of secrets, flowing with the stories of time untold</p>
              <hr />
              <h1 className="mb-1">Categories : Romance</h1>
            </p>
            <Link to="/review">
              <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                See Review
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
