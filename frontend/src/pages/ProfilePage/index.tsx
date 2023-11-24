// Importing assets
import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [reviews, setReviews] = useState([]);

  var profile_url = localStorage.getItem('profile');
  var User_name = localStorage.getItem('name');
  var User_email = localStorage.getItem('email');
  var User_id = localStorage.getItem('usid');

  const fetchUserReviews = async () => {
    fetch(`http://localhost:8080/api/review/fetch-review/user/${User_id}`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => console.error('Error fetching in User Review:', error));
  };

  const handleDleteReview = async (bookId: any) => {
    try {
      const response = await fetch('http://localhost:8080/api/review/delete-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          bookId: bookId,
          userId: User_id
        })
      });

      const data = await response.json();

      if (response.status === 200) {
        alert('Review deleted Successfully!');
        fetchUserReviews();
      } else {
        if (response.status === 404) {
          alert('Error occured');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchUserReviews();
  }, [User_id]);

  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <div className="bg-white shadow-2xl p-10 rounded-lg w-[50rem] h-[32rem] -mt-10">
          <img src={profile_url} alt="Profile" className="w-20 h-20 mx-auto rounded-full" />
          <p className="text-3xl font-bold text-center mt-2">{User_name}</p>
          <p className="text-2xl text-gray-600 text-center">{User_email}</p>
          <div>
            <div className="ml-10 mt-10">
              <p className="text-xl font-bold">
                Your Reviews<span className=" text-xs ml-2 font-extralight">You can delete it here</span>
              </p>
              <div className="max-h-[12rem] overflow-y-auto mt-4 border border-gray rounded-lg">
                <div className="p-5">
                  {reviews.map((review) => (
                    <div key={review.bookId} className="mb-2 mt-2">
                      <div className="flex">
                        <div>
                          <p className="text-lg font-semibold">{review.bookTitle}</p>
                          <p className="text-gray-700">{review.userReview}</p>
                        </div>
                        <div
                          className="ml-auto mr-10 items-center justify-center "
                          onClick={() => {
                            handleDleteReview(review.bookId);
                          }}
                        >
                          <Player
                            autoplay
                            loop
                            src="https://lottie.host/02249ae9-a11a-4fc0-8bd1-0ea454ef5c12/tH2pk3tDVW.json"
                            style={{ height: '60px', width: '60px' }}
                          ></Player>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
