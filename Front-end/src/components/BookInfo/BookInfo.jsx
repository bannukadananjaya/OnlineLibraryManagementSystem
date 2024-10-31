// import React from 'react'
import "./BookInfo.css";
import api from "../../api/api";
import {useState,useEffect} from "react"
import { useParams } from 'react-router-dom';

function BookInfo() {
 
  const [book, setBook] = useState([]);
  const bookId = useParams();
  // const API_URL = `http://localhost:3000/books/getbook/${urlId.id}`;

  useEffect(() => {
    const getBook = async () => {
      try {
        console.log(bookId);
        const response = await api.get(`/books/${bookId}`);

        if(response.status!==200){
          throw new Error("Failed to fetch data");
        }
        const data = await response.data;
        setBook(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, [bookId]);

  if (!book) return <p>Loading</p>;
  if (book)
  return (
    <div className="book">
      <div className="book-cover">
        <h className="book-title">Harvest Good</h>
        <div className="book-data">
          <div className="book-img">
            <img src={`http://localhost:3000/images/Book_673.jpg`} alt="" width='100%' />
          </div>
          <div className="book-info">
            <p className="book-author">viesvun vvjoi</p>

            <div className="book-category">
              <p>vearvrvaf</p>
            </div>
            <div className="bookcard-emptybox">Akjnjfnaj</div>
            <div className="bookcard-details">
              fiwjoiejfweifjiowev rvwrvivmividv vv edwewew
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookInfo;


  /* <div className="user-details-topbar">
              <img
                className="user-profileimage"
                src="./assets/images/Profile.png"
                alt=""
              ></img>
              <div className="user-info">
                <p className="user-name">{memberDetails?.userFullName}</p>
                <p className="user-id">
                  {memberDetails?.userType === "Student"
                    ? memberDetails?.admissionId
                    : memberDetails?.employeeId}
                </p>
                <p className="user-email">{memberDetails?.email}</p>
                <p className="user-phone">{memberDetails?.mobileNumber}</p>
              </div>
            </div> */

