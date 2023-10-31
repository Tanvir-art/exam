import React from "react";
import { HashLink } from "react-router-hash-link";

const Cta = () => {
  return (
    <div id="cta">
      <section className="text-gray-600 bg-[#439fe0]">
        <div className="container px-5 py-24 ">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
              Take the First Step Toward Better Health – Schedule Your
              Appointment Today!
            </h1>
            <button  className="flex-shrink-0 text-gay-600 bg-[#fff] border-0 py-2 px-8 focus:outline-none  rounded text-lg mt-10 sm:mt-0"><HashLink to='#appointment'>
              Take Appointment
            </HashLink>
            </button>
          </div>
        </div>
      </section>
    </div>
  ); 
};

export default Cta;
