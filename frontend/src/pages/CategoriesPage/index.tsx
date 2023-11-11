// Importing packages
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Importing styles
import './style.css';

export default function Categories() {
  const [products] = useState([
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Horror.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'HORROR'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Thriller.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'THRILLER'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Fantasy.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'FANTASY'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Sci-Fi.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'SCI-FI'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Autobiography.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'AUTOBIOGRAPHY'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Novels.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'NOVELS'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Historic.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'HISTORIC'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Comics.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'COMICS'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Mystery.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'MYSTERY'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Dystopian.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'DYSTOPIAN'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Adventure.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'ADVENTURE'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Memoir.png',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'MEMOIR'
    }
  ]);

  return (
    <div>
      <div className="footer-container">
        <div className="breads">
          <div className="box-container">
            {products.map((product, index) => (
              <div className="box" key={index}>
                {/* <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-eye"></a> */}
                <div className="image-container">
                  <img src={product.imageSrc} alt={'https://static.thenounproject.com/png/504708-200.png'} />
                </div>
                {/* <h3>{product.name}</h3> */}
                <div className="stars">
                  {product.stars.map((star, starIndex) => (
                    <i className={star} key={starIndex}></i>
                  ))}
                </div>
                <Link to="/listofcategories">
                  <div>
                    <a href="#order" className="btn">
                      {product.button}
                    </a>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
