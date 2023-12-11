//import React from 'react'
import "./Categories.css";
import img from '../../assets/images/categories/Book_Category.png';

function Categories() {
  return (
    <div className="category-container">
      <h className="category-title">Categories</h>
      <div className="categories">
        <div className="category-box">
          <img src={img} alt="" className="image-responsive"/>
          <p className="box-title">Novel</p>
        </div>
        <div className="category-box">
          <img src={img} alt="" className="image-responsive"/>
          <p className="box-title">Novel</p>
        </div>
        <div className="category-box">
          <img src={img} alt="" className="image-responsive"/>
          <p className="box-title">Novel</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;