// Importing packages
import { useEffect, useState } from 'react';

// Importing styles
import './style.css';
import { useParams } from 'react-router-dom';

export default function ReviewPage() {
  // State to store book reviews
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const { bookId } = useParams();
  const [book, setBook] = useState();

  // Function to handle submission
  const handleReviewSubmit = () => {
    if (reviewText.trim() !== '') {
      setReviews([...reviews, reviewText]);
      setReviewText('');
    }
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/book/fetch-book/review/${bookId}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      })
      .catch((error) => console.error('Error fetching books:', error));
  }, [bookId]);

  return (
    <div className="page-container">
      <div className="content-container">
        <div className="image-container">
          <img
            className="book-image"
            src="https://bookreviewagile.s3.us-west-1.amazonaws.com/Books/Pride+and+Prejudice.jpeg"
            alt="Book Cover"
          />
        </div>
        <div className="review-form">
          <div className="content-box">
            <div className="content-box-title">Book Information</div>
            <div className="content-item">
              <div className="content-label">Title:</div>
              <div className="content-text">Pride and Prejudice</div>
            </div>
            <div className="content-item">
              <div className="content-label">Author's Name:</div>
              <div className="content-text">Jane Austen</div>
            </div>
            <div className="content-item">
              <div className="content-label">Genre:</div>
              <div className="content-text">Romantic Novel</div>
            </div>
            <div className="content-item">
              <div className="content-label">Favorite Quote:</div>
              <div className="content-text">Till this moment I never knew myself.</div>
            </div>
            <div className="content-item">
              <div className="content-label">Favorite Character:</div>
              <div className="content-text">Elizabeth Bennet and Fitzwilliam Darcy. </div>
            </div>
            <div className="content-item">
              <div className="content-label">Rating:</div>
              <div className="rating-box">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-item">
        <h2 className="review-title">Review</h2>
        <p className="review-text">
          Pride and Prejudice is a novel of all time. It has captivated the hearts of readers across ages. The
          interesting plot captures the reader’s attention from the very first line. As it is narrated through the
          perspective of Elizabeth Bennet, readers will get the feel of living alongside the Bennet family. As Elizabeth
          undergoes a change in perspective and character, readers get a picture of the other characters present in the
          novel and the time of the novel. One could understand the novel well in the very first reading. Though young
          readers of the present may find it difficult to understand the plot in a certain part, yet, close reading and
          a background knowledge of Austen’s time will help one understand the novel better and enjoy.
        </p>
      </div>
      <div className="content-item">
        <div className="review-form">
          <h2 className="review-title">Write a Review</h2>
          <textarea
            placeholder="Write your review here"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <button onClick={handleReviewSubmit}>Submit Review</button>
        </div>
      </div>
      {reviews.length > 0 && (
        <div className="content-item">
          <h2 className="review-title">User Reviews</h2>
          <ul>
            {reviews.map((userReview, index) => (
              <li key={index}>{userReview}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
