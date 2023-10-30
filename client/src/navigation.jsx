import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Login from './Login';


const Navigation = () => {
    return (
    
        <div className="d-flex justify-content-center align-items-center bg-success vh-100">
            <div className="bg-success-subtle p-3 rounded w-25">
            <nav className="container">
        <div className="logo">
          <img src="/images/Volunteer_logo.jpg" alt="logo" className="img-fluid" />
        </div>
        <ul>
        <li><Link to="/gallery" class="link-dark">Volunteer</Link></li>
            <li><Link to="/about" class="link-dark">About</Link></li>
            <li><Link to="/contact" class="link-dark">Contact Us</Link></li>
        </ul>
        </nav>
  
        
        <p>Already have an account?</p>
        <Link to="/Login" className="btn btn-default border w-100 bg-warning rounded-0 text-decoration-none">
            Login
        </Link>
      

            </div>
       

        </div>
      
    );
  };
  
  export default Navigation;