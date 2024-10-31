import "./Books.css";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
// import { BookContext } from "../../context/BookContext";
import api from "../../api/api";
import BookCard from "./BookCard";

function Allbooks(props) {

  // const {books,categories} = useContext(BookContext);
  const [books,setBooks] = useState([]);
  const [categories,setCategories] = useState([]);
  const [state,setState] = useState('all');
  console.log("state",state)

  useEffect(()=>{
    //fetch categories
    const getCategories = async () => {
      try{
        const response = await api.get('/categories');
        const data = await response.data;
       
        if(response.status !== 200){
          console.log("error getting data",data);
        }
        console.log("Get data _",data);
        setCategories(data);
      }catch(err){
        console.log(err)
      }
      console.log(categories)
      
    }
    //
    const getBooks = async() =>{
      try{
        // if(state === 'all'){
        const response = await api.get(state==='all'?'/books':`/books/category/${state}`);
        console.log(`/books/${state}`);
        const data = await response.data;
        if(response.status !== 200){
          console.log("error getting data",data);
        }
        console.log("Get data",data);
        setBooks(data);
    
        // }else{
        //   const response = await api.get(`/books/${state}`);
        //   const data = await response.data;
        //   if(response.status !== 200){
        //     console.log("error getting data",data);
        //   }
        //   console.log("Get data",data);
        //   setBooks(data);
        // }
      }
      catch(err){
        console.log(err)
      }
      
    }
    getCategories();
    getBooks();
    console.log("run")
    
  },[state])
  
  // const handleLike = async () => {
  //   const response = api.put('books/like/:id');
  //   const data = response.data;

  //   if(response.status!==200){
  //     console.log("error",data);
  //   }
  //   console.log("Success",data);
  // }


  if (!books) return <p>Loading</p>;
  if (books)
    return (
      <div className="books-page">
        {/* sideBar */}
        <div className="categories">
          {categories.map((item,i)=>(
            <div key={i} className="category-item">
              <Link to={`/Books/${item.categoryName}`} onClick={()=>setState(item.categoryName)}>{item.categoryName}</Link>
            </div>
          ))}
        </div>

        {/* rightside */}
        <div className="books1">
            {books.map((item, i) => (
              // if(!props.category || props.category === item.category ? setState(item.category):setState('all'))
              // return (
                // <div key={i} className="books2">
                //    { item.map((book, j) => (
                        <BookCard props={item} key={i}/>
                //     ))}  
                // </div>
              ))} 
        </div>
      </div>
    );
}

export default Allbooks;
