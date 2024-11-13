import "./Categories.css";
import img from '../../assets/images/categories/Book_Category.png';
import CategoryItem from "./CategoryItem";
import { useEffect, useState } from "react";
import api from "../../api/api";

function Categories() {

  const [data,setData] = useState([])

  useEffect(()=>{
    const getCategories =async() =>{
      const response = await api.get("/books/category");
      const data = response.data;
      if(response.status==200){
        const categories = data.category.slice(0,2);
        setData(categories);
      }
    }
    getCategories();
  })

  // console.log(data);
  // const categories =[
  //   {'id':1,'title':'Novel','img':img},
  //   {'id':2,'title':'Horror','img':img},
  //   {'id':2,'title':'Sci-fi','img':img}
  // ]
  return (
    <div className="category-container">
      <h className="category-title">Categories</h>
      <div className="categories">
        {data.map((item,id)=>{
        return  <CategoryItem key={id} title={item.title} img={item.img}/>
        })}
        {/* <div className="category-box">
          <img src={img} alt="" className="image-responsive"/>
          <p className="box-title">Novel</p>
        </div>
        <div className="category-box">
          <img src={img} alt="" className="image-responsive"/>
          <p className="box-title">Novel</p>
        </div>
        <div className="category-box">
          <img src={img} alt="" className="image-responsive"/>
          <p className="box-title">Novel</p>
        </div> */}
      </div>
    </div>
  );
}

export default Categories;

// import "./Categories.css";
// import img from '../../assets/images/categories/Book_Category.png';
// import CategoryItem from "./CategoryItem";

// function Categories() {
//   const categories = [
//     { 'id': 1, 'title': 'Novel', 'img': img },
//     { 'id': 2, 'title': 'Horror', 'img': img }
//   ];

//   return (
//     <div className="category-container">
//       <h1 className="category-title">Categories</h1>
//       <div className="categories">
//         {categories.map((item) => (
//           <CategoryItem key={item.id} title={item.title} img={item.img} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Categories;
