import React from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10"  >
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral text-neutral-content rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-6">
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
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
