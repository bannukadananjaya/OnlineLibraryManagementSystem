//import React from 'react'
import "./PopularBooks.css";
import axios from "axios";
import { useEffect, useState } from "react";

const PopularBooks = () => {
  const API_URL = "http://localhost:3000/";
  const [books, setBooks] = useState();
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const getallBooks = async () => {
      try {
        const response = await axios.get(API_URL + "api/books/allbooks");

        setBooks(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getallBooks();
  }, [API_URL]);

  useEffect(() => {
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
  }, [API_URL]);

  //   useEffect(() => {
  //     const getallBooks = async () => {
  //         const response = await axios.get(API_URL + "api/books/allbooks")
  //         setRecentAddedBooks(response.data.slice(0, 5))
  //     }
  //     getallBooks()
  // }, [API_URL])

if(!books)
  return null
if(books)
  return (
    <div className="popularbooks-container">
      <h className="popularbooks-title">Popular Books</h>
      <div className="books">
        {books.map((book, index) => {
          return (
            <div className="book-card" key={index}>
              <img
                src={`${API_URL}images/${book.image}`}
                alt={book.title}
              ></img>
              <p className="bookcard-title">{book.bookName}</p>
              <p className="bookcard-author">{book.author}</p>
              <div className="bookcard-category">
                <p>
                  {book.categories.map((categoryID) => {
                    const matchingCategory = allCategories.find(
                      (category) => category.value === categoryID
                    );
                    console.log(matchingCategory.text);

                    return matchingCategory ? matchingCategory.text : null;
                  })}
                </p>
              </div>
              <div className="bookcard-emptybox">{book.bookStatus}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularBooks;
