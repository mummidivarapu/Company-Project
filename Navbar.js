import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import your custom styles

const Navbar = () => {
  return (
    <div className='navbar' style={{ color: "white" }}>
      <h4 style={{float:"left",paddingLeft:"50px",marginTop:"20px",color:"white",listStyle:"none"}}>TEMPLATE <br />DSGN</h4>
     
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/help">Contact Us</Link></li>
      </ul>
      
      <Link to="/Sinup">
        <button className='btn'>Sign Up</button>
      </Link>
    </div>
  );
};

export default Navbar;
