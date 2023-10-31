import React from 'react'
import './Appointment.css'
const Appointment = () => { 
  return (
    <div className='bgImg flex flex-col md:flex-col lg:flex-row  items-center' id='appointment'>
        <div className='text-white md:pl-20 text-center md:text-center lg:text-left' data-aos="fade-up-left">
            <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold pt-6'>We care for you</h2>
            <h2 className='text-2xl font-bold py-4'>Medical Services That You Can Trust.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus minus commodi nisi eius. Odit, aliquam omnis soluta delectus nulla nihil!</p>
        </div>
    <div className="text-black " data-aos="zoom-out-down">
  <div className="container px-5 py-24">
    <div className="lg:w-1/2 md:w-2/3 mx-auto bg-[#fff] rounded p-6">
      <div className="flex flex-wrap -m-2 mx-auto">
        <div className="p-2 w-1/2">
          <div className="relative"> 
            <label  className="leading-7 text-sm ">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label  className="leading-7 text-sm ">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>


        <div className="p-2 w-1/2">
          <div className="relative">
            <label  className="leading-7 text-sm ">Phone</label>
            <input type="tel" id="number" name="number" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>


        <div className="p-2 w-1/2">
          <div className="relative">
            <label  className="leading-7 text-sm">Date</label>
            <input type="date" id="date" name="date" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>


        <div className="p-2 w-full">
          <div className="relative">
            <label  className="leading-7 text-sm ">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Book Now</button>
        </div>
      
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Appointment
