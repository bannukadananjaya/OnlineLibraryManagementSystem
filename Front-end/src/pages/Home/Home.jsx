//import React from 'react'
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import WelcomeBox from "../../components/WelcomeBox/WelcomeBox";
import Stats from "../../components/Stats/Stats";
import News from '../../components/News/News'
//import PhotoGallery from '../../Components/PhotoGallery/PhotoGalary'
import PopularBooks from '../../Components/PopularBooks/PopularBooks'
import RecentAddedBooks from '../../Components/RecentBooks/RecentBooks'
import ReservedBooks from '../../Components/ReservedBooks/ReservedBooks'
import Categories from "../../components/categories/Categories";

import { useContext } from "react";
// import { BookContext } from "../../context/BookContext";


function Home() {

  // const {books} = useContext(BookContext);
  // console.log("books",books)

  // if (!books || books.length === 0) {
  //   // If books are not yet loaded, show loading
  //   return <div>Loading...</div>;
  // }
  return (
    <div>
      <ImageSlider/>
      <WelcomeBox/>
      <Stats/>
      <Categories/>
      {/* <PopularBooks props={books[0].books}/> */}
      <PopularBooks/>
      <RecentAddedBooks/>
      {/* <ReservedBooks/> */}
      <News/>
    </div>
  );
}

export default Home;
