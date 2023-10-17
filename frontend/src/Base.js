import React from 'react';
import './Base.css'; // Create a CSS file for styling


const  Base = () => {
  return (
    <header>
      <a href="#" className="logo"><i className="fa fa-paw"></i> Critique.</a>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a className="active" href="#genre">Genre</a>
        <a href="#search">Search</a>
        {/* <a href="#special">Special</a> */}
        <a href="#review">Review</a>
        {/* <a href="#order">order</a> */}
      </nav>

      <div className="icons">
        <i className="fas fa-bars" id="menu-bars"></i>
        <i className="fas fa-search" id="search-icon"></i>
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-shopping-cart"></a>
        <a href="file:///D:/WT/pubstore/publog.html" className="fas fa-user"></a>
      </div>
    </header>
  );
}

export default Base;
