import React from 'react'
import { HashLink } from 'react-router-hash-link';
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
    <ul>
    <li>
              <HashLink to="#appointment">Appointment</HashLink>
            </li>
            <li>
              <HashLink to="#about">About Us</HashLink>
            </li>
            <li>
              <HashLink to="#service">Service</HashLink>
            </li>
            <li>
              <HashLink to="#testimonial">Testimonial</HashLink>
            </li>
            <li>
              <HashLink to="#price">Price</HashLink>
            </li>
            <li>
              <HashLink to="#cta">Cta</HashLink>
            </li>
            <li>
              <HashLink to="#team">Team</HashLink>
            </li>
            <li>
              <HashLink to="#contact">Contact</HashLink>
            </li>
            </ul>
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
