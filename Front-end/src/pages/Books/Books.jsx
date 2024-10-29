import "./Books.css";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { BookContext } from "../../context/BookContext";
import api from "../../api/api";

function Allbooks(props) {

  const {books,categories} = useContext(BookContext);

  console.log("categories",books)
  console.log("Books",books)

  
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
        {/* sideBar */}
        <div className="categories">
          {categories.map((item,i)=>{
            return <div key={i} className="category-item"><Link to={`/Books/${item}`}>{item}</Link></div>
          })}
        </div>

        {/* rightside */}
        <div className="books1">
            {books.map((item, i) => {
              if(!props.category || props.category === item.category)
              return (
                <div key={i} className="books2">
                   { item.books.map((book, j) => (
                        <div className="book-card" key={j}>
                            <Link to={`/books/${book.id}`}>
                                <img
                                    src={book.volumeInfo.imageLinks?.thumbnail}
                                    alt={book.volumeInfo.title}
                                />
                            </Link>
                            <i className="fa-solid fa-heart" onClick={handleLike}></i>
                            <p className="bookcard-title">{book.volumeInfo.title}</p>
                            <p className="bookcard-author">{book.volumeInfo.authors?.join(', ')}</p>
                            <div className="bookcard-emptybox">{book.bookStatus}</div>
                        </ div>
                    ))}  
                </div>
              )
            })} 
        </div>
      </div>
    );
}

export default Allbooks;
