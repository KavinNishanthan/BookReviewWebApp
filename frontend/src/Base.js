import React from 'react'
import "./Base.css";
const Base = () => {
  return (
    <div>
      <header>
      <a href="#" class="logo"><i class="fa fa-paw"></i> Critique.</a>

<nav class="navbar">
    <a href="#home" >Home</a>
    <a href="#breads" >Genre</a>
    <a class="active" href="#about" >Search</a>
    {/* <a href="#special" ></a> */}
    <a href="#review" >Review</a>
    {/* <a class="active" href="#order" >order</a> */}
</nav>

<div class="icons">
     <i class="fas fa-bars" id="menu-bars"></i>
     <i class="fas fa-search" id="search-icon"></i>
     <a href="#" class="fas fa-heart"></a>
     <a href="#" class="fas fa-shopping-cart"></a>
     <a href="file:///D:/WT/pubstore/publog.html" class="fas fa-user"></a>
</div>
</header>
    </div>
  );
}

export default Base