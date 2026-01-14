// Importing packages
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Importing styles
import './style.scss';

export default function Categories() {
  const [products] = useState([
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Horror.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'Horror'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Thriller.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'Thriller'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Fantasy.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'Fantasy'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Sci-Fi.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'Science Fiction'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Autobiography.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'Autobiography'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Novels.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'Novel'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Historic.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'Historic'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Comics.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'Comics'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Mystery.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'Mystery'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Dystopian.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'Dystopian'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Adventure.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'Adventure'
    },
    {
      imageSrc: 'https://bookreviewagile.s3.us-west-1.amazonaws.com/Gener/Memoir.png',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'Memoir'
    }
  ]);

  const navigate = useNavigate();

  const handleButtonClick = (category: string) => {
    navigate(`/listofcategories/${category}`);
  };

  return (
    <div className="wrapper-cat-page">
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
                <div>
                  <a
                    className="btn"
                    onClick={() => {
                      handleButtonClick(product.button);
                    }}
                  >
                    {product.button}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
