import React from 'react'
import { BsFacebook, BsLinkedin, BsInstagram, BsYoutube } from 'react-icons/bs';
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Cardiology</a> 
    <a className="link link-hover">Eye Care</a> 
    <a className="link link-hover">Neurology</a> 
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">Appointment</a> 
    <a className="link link-hover">About Us</a> 
    <a className="link link-hover">Service</a> 
    <a className="link link-hover">Testimonial</a> 
    <a className="link link-hover">Price</a> 
    <a className="link link-hover">Cta</a>
    <a className="link link-hover">Team</a>
    <a className="link link-hover">Contact</a>
  </nav> 
  <nav>
    <header className="footer-title">Social</header> 
    <div className="grid grid-flow-col gap-4 text-3xl">
      <BsFacebook/>
      <BsInstagram/>
      <BsLinkedin/>
      <BsYoutube/>
    </div>
  </nav>
</footer>
    </div>
  )
}

export default Footer
