import { NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import Book from './components/Book.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import logo from './assets/green_yard_hotel_new_logo.png'


function App() {

  return (
    <>
      <div>
        <img src={logo} alt='Green Yard Hotel logo.' style={{height: '8rem'}}/>
      </div>
      
      <nav className="nav-bar">
        <NavLink to='/' className='navigation'>Home</NavLink>
        <NavLink to='/our-rooms' className='navigation'>Book Now</NavLink>
        <NavLink to='/about' className='navigation'>About</NavLink>
        <NavLink to='/contact' className='navigation'>Contact Us</NavLink>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/our-rooms" element={<Book/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </>
  )
}

export default App
