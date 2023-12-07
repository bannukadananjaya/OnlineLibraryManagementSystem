//import React from 'react'
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import WelcomeBox from "../../components/WelcomeBox/WelcomeBox";
import Stats from "../../components/Stats/Stats";
import News from '../../components/News/News'
// import PhotoGallery from '../../Components/PhotoGallery/PhotoGalary'
import PopularBooks from '../../Components/PopularBooks/PopularBooks'
import RecentAddedBooks from '../../Components/RecentBooks/RecentBooks'
import ReservedBooks from '../../Components/ReservedBooks/ReservedBooks'

function Home() {
  return (
    <div>
      <ImageSlider/>
      <WelcomeBox/>
      <Stats/>
      <PopularBooks/>
      <RecentAddedBooks/>
      <ReservedBooks/>
      <News/>
      {/*<PhotoGallery/> */}
    </div>
  );
}

export default Home;
