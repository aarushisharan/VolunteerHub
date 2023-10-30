import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

function Contact()
{
    return(
        <div className="d-flex justify-content-center align-items-center bg-success  vh-100">
            <div className="bg-success-subtle p-3 rounded w-25">
            <div className="logo">
        <img src="/images/contact.jpg" alt="contact" className="img-fluid"/>
      </div>
      <ul>
        <li>Contact No: 8947673212</li>
        <li>Email: volunteerhub@gmail.com</li>
        <li>Location: PICT Pune</li>
      </ul>

            </div>

        </div>
        
    );

}

export default Contact;