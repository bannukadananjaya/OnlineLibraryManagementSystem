import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Books from "./pages/Books/Books"
import StudentDashboard from "./pages/Dashboard/StudentDashboard/StudentDashboard";
import AdminDashboard from "./pages/Dashboard/AdminDashboard/AdminDashboard";
import About from "./pages/About/About";
import Contact from "./pages/Contact/contact";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Books" element={<Books/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/dashboard@student" element={<StudentDashboard />} />
          <Route path="/dashboard@admin" element={<AdminDashboard />} />
        </Routes>
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App;
