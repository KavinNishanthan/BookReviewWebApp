import React, { useState } from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  const [products] = useState([
    {
      imageSrc: '/images/h (1).jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'HORROR',
    },
    {
      imageSrc: '/images/t.jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'THRILLER',
    },
    {
      imageSrc: '/images/f (1).jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'FANTASY',
    },
    {
      imageSrc: '/images/s (1).jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'SCI-FI',
    },
    {
      imageSrc: '/images/a (1).jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'AUTOBIOGRAPHY',
    },
    {
      imageSrc: '/images/n (1).jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'NOVELS',
    },
    {
      imageSrc: '/images/his (1).jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'HISTORIC',
    },
    {
      imageSrc: '/images/c (1).jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'COMICS',
    },
    {
      imageSrc: '/images/my (1).jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'MYSTERY',
    },
    {
      imageSrc: '/images/dys (1).jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'DYSTOPIAN',
    },
    {
      imageSrc: '/images/adven (1).jpg',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'ADVENTURE',
    },
    {
      imageSrc: '/images/me.png',
      stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt'],
      button: 'MEMOIR',
    },
  ]);

  return (
    <div className="footer-container">
      <div className="breads">
        <div className="box-container">
          {products.map((product, index) => (
            <div className="box" key={index}>
              {/* <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-eye"></a> */}
              <div className="image-container">
              <img src={product.imageSrc} alt={product.name} />
              </div>
              {/* <h3>{product.name}</h3> */}
              <div className="stars">
                {product.stars.map((star, starIndex) => (
                  <i className={star} key={starIndex}></i>
                ))}
              </div>
              <a href="#order" className="btn">{product.button}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
