//import React from 'react'
import "./PopularBooks.css";
import api from "../../api/api";
import { useEffect, useState } from "react";
import BookCard from "../../pages/Books/BookCard";

const PopularBooks = (props) => {
  // console.log("prps",props)

  // const {books} = props;
  // console.log(props.);
  const [books, setBooks] = useState([]);

  // Earliar every time data get from databasse
  useEffect(() => {
    const getPopularBooks = async () => {
      try {
        const response = await api.get("/books/popularBooks");
        const resdata = response.data;
        if(response.status==200){
          const {popularBooks} = resdata;
          setBooks(popularBooks);
          console.log(resdata);
        }
        
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getPopularBooks();
  }, []);

  /*useEffect(() => {
    const getAllCategories = async () => {
      try {
        const response = await axios.get(
          API_URL + "api/categories/allcategories"
        );
        // console.log(response);
        // const categories = JSON.parse(response.data);
        // console.log(typeof response.data);
        console.log(response.data);
        const all_categories = await response.data.map((category) => ({
          value: `${category._id}`,
          text: `${category.categoryName}`,
        }));
        setAllCategories(all_categories);
      } catch (err) {
        console.log(err);
      }
    };
    getAllCategories();
  }, [API_URL]);*/
  console.log("BookS:",books)

// if(!props)
//   return <p>Loading</p>
// if(props)
  return (
    <div className="popularbooks-container">
      <h className="popularbooks-title">Popular Books</h>
      <div className="books">
        
        {/* get 10 books */}
        {/* {props.props.slice(0,10).map((book, index) => {  */}
          
        {books.map((book,index)=>{
        
          return (
            <BookCard book={book} key={index} />
          )})}
      </div>
    </div>
  );
  
};

export default PopularBooks;
