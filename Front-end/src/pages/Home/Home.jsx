//import React from 'react'
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import WelcomeBox from "../../components/WelcomeBox/WelcomeBox";
import Stats from "../../components/Stats/Stats";
import News from '../../components/News/News'
//import PhotoGallery from '../../Components/PhotoGallery/PhotoGalary'
// import PopularBooks from '../../Components/PopularBooks/PopularBooks'
import RecentAddedBooks from '../../Components/RecentBooks/RecentBooks'
import ReservedBooks from '../../Components/ReservedBooks/ReservedBooks'
import Categories from "../../components/categories/Categories";

function Home() {
  return (
    <div>
      <ImageSlider/>
      <WelcomeBox/>
      <Stats/>
      <Categories/>
      {/* <PopularBooks/> */}
      <RecentAddedBooks/>
      <ReservedBooks/>
      <News/>
    </div>
  );
}

export default Home;
