import React from 'react'
import './Books.css';
import { Link } from 'react-router-dom'

const BookCard = (props) => {
  const { book} = props;
  // console.log("bookd",props);
  return (
    <div className="book-card">
        <Link to={`/books/${book._id}`}>
            <img
                // src={book.volumeInfo.imageLinks?.thumbnail}
                src={book.image}
                alt={book.bookName}
            />
        </Link>
        {/* <i className="fa-solid fa-heart" onClick={handleLike}></i> */}
        <p className="bookcard-title">{book.bookName}</p>
        <p className="bookcard-author">{book.author}</p>
        <div className="bookcard-emptybox">{book.bookStatus}</div>
    </ div>
    // <></>
  )
}

export default BookCard