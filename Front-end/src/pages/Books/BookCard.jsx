import React from 'react'
import './Books.css';
import { Link } from 'react-router-dom'

const BookCard = ({props}) => {
  console.log(props);
  return (
    <div className="book-card">
        <Link to={`/books/${props._id}`}>
            <img
                // src={props.volumeInfo.imageLinks?.thumbnail}
                src={props.image}
                alt={props.bookName}
            />
        </Link>
        {/* <i className="fa-solid fa-heart" onClick={handleLike}></i> */}
        <p className="bookcard-title">{props.bookName}</p>
        <p className="bookcard-author">{props.author}</p>
        <div className="bookcard-emptybox">{props.bookStatus}</div>
    </ div>
  )
}

export default BookCard