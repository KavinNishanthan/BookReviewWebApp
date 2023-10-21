import React from 'react';
import './App.css';
import FullWidthSearchBar from './FullWidthSearchBar';
import Base from './Base';
import ImageOverLay from './ImageOverLay';

function App() {
  // Sample data for five ImageOverLay components
  const images = [
    {
      imageUrl: './images/b.jpg', // Replace with your image URLs
      
    },
    {
      imageUrl: './images/B1.jpg',
      
    },
    {
      imageUrl: './images/b2.jpg',
      
    },
    {
      imageUrl: './images/b3.jpg',
      
    },
    {
      imageUrl: './images/b4.jpg',
      
    },
    {
      imageUrl: './images/b6.jpg',
      
    },
    
  ];
  const recommendedImages = [
    {
      imageUrl: './images/b7.jpg', // Replace with your recommended image URLs
      
    },
    {
      imageUrl: './images/b8.jpg',
      text: '',
    },
    {
      imageUrl: './images/b9.jpg',
      text: 'Recommended 3',
    },
    {
      imageUrl: './images/b5.jpg',
      text: 'Recommended 3',
    },
    {
      imageUrl: './images/b11.jpg',
      text: 'Recommended 3',
    },
    {
      imageUrl: './images/b10.jpg',
      text: 'Recommended 3',
    },
    // ... (other recommended images)
  ];
  const handleSearch = (query) => {
    // Implement your search functionality here
    console.log(`Searching for: ${query}`);
    // You can replace the console.log with the actual search logic
  };


  return (
    <div className="App">
      <Base />
      <FullWidthSearchBar onSearch={handleSearch} />
      <h1><br></br>POPULAR SEARCH</h1>
      <div className="image-overlay-row">
        {images.map((image, index) => (
          <ImageOverLay key={index} imageUrl={image.imageUrl} />
        ))}
    </div>
    <h1><br></br>RECOMMENDED</h1>
    <div className="image-overlay-row">
        {recommendedImages.map((image, index) => (
          <ImageOverLay key={index} imageUrl={image.imageUrl} />
        ))}
      </div>
    </div>
  );
}


export default App;
