import "./Books.css";
import { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { BookContext } from "../../context/BookContext";
import api from "../../api/api";

function Allbooks(props) {

  const {books} = useContext(BookContext);

  console.log("Books",books)
  // const [books, setBooks] = useState();
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {

  //   const getAllCategories = async() => {
  //     try{
  //       const response = await api.get('/categories/allCategories');
      
  //       if(response.status!==200){
  //         console.log("No categories added")
  //       }
  
  //       const allCategories = response.data;
  //       console.log(allCategories)
  //       setCategories(allCategories);
  //     }catch(err){
  //       console.log(err);
  //     }
  //   }
  //   const getAllBooks = async () => {
  //     try {
  //       const response = await api.get("books/allbooks");
  //       const data = response.data;
  //       if(response.status!==200){
  //         console.log("No books added",data);
  //       }
  //       console.log(data);
  //       setBooks(data);
     
  //     } catch (error) {
  //       console.error("Error fetching books:", error);
  //     }
  //   };

  //   getAllCategories();
  //   getAllBooks();

  // },[]);

  const handleLike = async () => {
    const response = api.put('books/like/:id');
    const data = response.data;

    if(response.status!==200){
      console.log("error",data);
    }
    console.log("Success",data);
  }

  if (!books) return <p>Loading</p>;
  if (books)
    return (
      <div className="books-page">
        {/* <div className="category">
          {categories.map((item,i)=>{
            return(
              <div className="category-card" key={i} >
                 <p>{item.categoryName}</p>
              </div>
            )
          })}
        </div> */}
        <div className="books">
          {books.map((book, index) => {
            return (
              <div className="book-card" key={index}>
                <Link to={`/books/${book._id}`}>
                  <img
                    src={book.books.imageLinks.thumbnail}
                    alt={book.title}
                  ></img>
                </Link>
                <i className={`fa-solid fa-heart`} onClick={handleLike}></i>

                <p className="bookcard-title">{book.title}</p>
                <p className="bookcard-author">{book.authors}</p>
                <div className="bookcard-category">
                  {/* <p>
                    {book.categories.map((categoryID) => {
                      const matchingCategory = categories.find(
                        (category) => category.value === categoryID
                      );
                        console.log(categories)
                      return matchingCategory
                        ? matchingCategory.text
                        : null;
                    })} 
                  </p> */}
                </div>
                {/* <div className="bookcard-emptybox">{book.bookStatus}</div> */}
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Allbooks;
