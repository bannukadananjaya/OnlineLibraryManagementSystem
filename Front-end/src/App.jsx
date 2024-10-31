import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Books from "./pages/Books/Books";
import MemberDashboard from "./pages/Dashboard/StudentDashboard/StudentDashboard";
import AdminDashboard from "./pages/Dashboard/AdminDashboard/AdminDashboard";
import BooksInfo from "./components/BookInfo/BookInfo";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import {useContext} from "react";
import { AuthContext } from "./context/AuthContext"; 

function App() {

  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <Router>
      <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Books/mystery" element={<Books category="Mystery"/>} />
        <Route path="/Books/fantasy" element={<Books category="Fantasy"/>} />
        <Route path="/Books/science fiction" element={<Books category="Science Fiction"/>} />
        {/* <Route path="/Books" element={<Books />} /> */}

        <Route path="/Books/id" element={<BooksInfo/>}/>

        <Route path="/signin" element={ user ? (user.isAdmin ? <Navigate replace to='/dashboard@admin'/> : <Navigate replace to='/dashboard@member'/>) : <Signin />} />
        <Route path="/dashboard@member" element={user ? (user.isAdmin ===false ? <MemberDashboard/> : <Navigate replace to='/'/> ):  <Navigate replace to='/'/>} />
        <Route path="/dashboard@admin" element={user ? (user.isAdmin ===true ? <AdminDashboard/> : <Navigate replace to='/'/>):<Navigate replace to='/'/>}/>
        {/* <Route path="/dashboard@admin" element={<AdminDashboard />} /> */}

        {/* <Route path={user ? (user.isAdmin ? '/dashboard@admin' : '/dashboard@member') : '/Signin'} element={<Signin />} /> */}
        
        {/* <Route exact path='/signin'>
            {user ? (user.isAdmin ? <Redirect to='/dashboard@admin' />:<Redirect to='/dashboard@member' />) : <Signin />}
          </Route> */}
          {/* <Route exact path='/dashboard@member'>
            {user ? (user.isAdmin === false ? <MemberDashboard /> : <Redirect to='/' />) : <Redirect to='/' />}
          </Route>
          <Route exact path='/dashboard@admin'>
            {user ? (user.isAdmin === true ? <AdminDashboard /> : <Redirect to='/' />) : <Redirect to='/' />}
          </Route> */}
          {/* <Route exact path='/books'>
            <Allbooks />
          </Route> */}   
      </Routes>
      <Footer/>
      </>

    </Router>
  );
}

export default App;
