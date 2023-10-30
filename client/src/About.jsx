import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

function About() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-success vh-200">
      <div className="bg-success-subtle p-3 rounded w-75 text-center">
        <div className="logo">
          <img src="/images/Volunteer_logo.jpg" alt="logo" className="img-fluid" style={{ width: '150px', height: '150px' }} />
        </div>
        <p>
          <h2>About Volunteer Hub</h2>
          <p class="fst-italic">
            At Volunteer Hub, we are committed to making a difference by connecting passionate volunteers with organizations in need. Our mission is to bridge the gap between individuals who want to give back to their communities and the organizations that rely on their support.
          </p>
          <h2>Who we are</h2>
          <p class="fst-italic">
          Volunteer Hub was founded by a group of like-minded individuals who share a deep sense of community and a desire to effect positive change. We understand the vital role that volunteers play in creating a better world, and our platform is designed to make volunteering easy, accessible, and rewarding for both volunteers and organizations.
          </p>
          <h2>Our Vision</h2>
          <p class="fst-italic">
          We envision a world where every person has the opportunity to contribute to a cause they are passionate about. By creating a hub for volunteers, we aim to empower individuals to make a real impact on the causes that matter most to them. We believe that everyone has a unique set of skills, talents, and time to offer, and we want to help them find the perfect volunteer opportunity to share their gifts.
          </p>
          <h2>How We Work</h2>
          <p class="fst-italic">
            <h5>Connecting Volunteers</h5>
            <p class="fst-italic">Volunteer Hub provides a user-friendly platform that allows volunteers to discover opportunities that align with their interests and skills. Whether you are a student, a working professional, or a retiree, our platform makes it simple to find the right volunteer opportunity for you.</p>
          </p>
          <h5 > Supporting Organization</h5>
          <p>We partner with a wide range of non-profit organizations, schools, charities, and community groups. These organizations can post their volunteer needs on our platform, making it easy for them to find dedicated volunteers who share their mission.</p>

          
        </p>
        <h5>Community Buiding</h5>
        <p class="fst-italic"> We believe that volunteering is not just about helping others; it's also about building a sense of community. Volunteer Hub encourages volunteers and organizations to come together, share experiences, and foster a culture of giving and collaboration.
        </p>
        <h2>Join Us</h2>
          <p class="fst-italic">
          Whether you're an organization in need of dedicated volunteers or an individual looking to make a positive impact, we invite you to join us at Volunteer Hub. Together, we can create a better, more compassionate world through the power of volunteering.
        Join Volunteer Hub today and be a part of something truly meaningful. Together, we can change lives, communities, and the world.
          </p>
        </div>
        
    </div>
  );
}

export default About;
