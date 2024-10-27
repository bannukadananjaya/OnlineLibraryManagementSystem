// import React from 'react'
import "./BookInfo.css";
import axios from "axios";
import {useState,useEffect} from "react"
import { useParams } from 'react-router-dom';

function BookInfo() {
 
  const [data, setData] = useState([]);
  const urlId = useParams();
  const API_URL = `http://localhost:3000/books/getbook/${urlId.id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(urlId);
        const response = await axios.get(API_URL);

        if(!response.ok){
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [API_URL,urlId]);

  if (!data) return null;
  if (data)
  return (
    <>
    <pre>{JSON.stringify(data.null,2)}</pre>
    </>
    // <div className="book">
    //   <div className="book-cover">
    //     <h className="book-title">Harvest Good</h>
    //     <div className="book-data">
    //       <div className="book-img">
    //         <img src={`http://localhost:3000/images/Book_673.jpg`} alt="" width='100%' />
    //       </div>
    //       <div className="book-info">
    //         <p className="book-author">viesvun vvjoi</p>

    //         <div className="book-category">
    //           <p>vearvrvaf</p>
    //         </div>
    //         <div className="bookcard-emptybox">Akjnjfnaj</div>
    //         <div className="bookcard-details">
    //           fiwjoiejfweifjiowev rvwrvivmividv vv edwewew
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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

