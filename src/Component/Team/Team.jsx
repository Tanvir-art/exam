import React from "react";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";
const Team = () => {
  return (
    <>
    <div id="team">
      <div>
        <h2 className="text-4xl font-bold pt-20 text-center">Our Doctors</h2>
        <p className="text-center text-lg py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, odit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-10">
        <div className="parent card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src="/image/d1.jpg" alt="doctor" />
          </figure>

          <div className="flex justify-center gap-6  text-2xl relative bottom-20 team">
            <div className="bg-[#439FE0] hover:bg-[#0875C2] p-4 text-white rounded-full">
              <BsLinkedin />
            </div>
            <div className="bg-[#439FE0] hover:bg-[#0875C2] p-4 text-white rounded-full">
              <BsFacebook />
            </div>
            <div className="bg-[#439FE0] hover:bg-[#0875C2] p-4 text-white rounded-full">
              <BsInstagram />
            </div>
          </div>
          <div className="card-body relative bottom-6">
            <h2 className="card-title text-2xl font-bold mx-auto">
              Dr. Luiz Frank
            </h2>
            <p className="text-lg mx-auto">Orthopedic</p>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src="/image/d2.jpg" alt="doctor" />
          </figure>

          <div className="flex justify-center gap-6  text-2xl relative bottom-20 team">
            <div className="bg-[#439FE0] p-4 hover:bg-[#0875C2] text-white rounded-full">
              <BsLinkedin />
            </div>
            <div className="bg-[#439FE0] p-4 hover:bg-[#0875C2] text-white rounded-full">
              <BsFacebook />
            </div>
            <div className="bg-[#439FE0] p-4 hover:bg-[#0875C2] text-white rounded-full">
              <BsInstagram />
            </div>
          </div>
          <div className="card-body relative bottom-6">
            <h2 className="card-title text-2xl font-bold mx-auto">
              Dr. Selina Gomez
            </h2>
            <p className="text-lg mx-auto">Neurosurgery</p>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src="/image/d3.jpg" alt="doctor" />
          </figure>

          <div className="flex justify-center gap-6  text-2xl relative bottom-20 team">
            <div className="bg-[#439FE0] p-4 hover:bg-[#0875C2] text-white rounded-full">
              <BsLinkedin />
            </div>
            <div className="bg-[#439FE0] p-4 hover:bg-[#0875C2] text-white rounded-full">
              <BsFacebook />
            </div>
            <div className="bg-[#439FE0] p-4 hover:bg-[#0875C2] text-white rounded-full">
              <BsInstagram />
            </div>
          </div>
          <div className="card-body relative bottom-6">
            <h2 className="card-title text-2xl font-bold mx-auto">
              Dr. Michel Jhonson
            </h2>
            <p className="text-lg mx-auto">Orthopedic</p>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src="/image/d4.jpg" alt="doctor" />
          </figure>

          <div className="flex justify-center gap-6  text-2xl relative bottom-20 team">
            <div className="bg-[#439FE0] p-4 hover:bg-[#0875C2] text-white rounded-full">
              <BsLinkedin />
            </div>
            <div className="bg-[#439FE0] p-4 hover:bg-[#0875C2] text-white rounded-full">
              <BsFacebook />
            </div>
            <div className="bg-[#439FE0] p-4 hover:bg-[#0875C2] text-white rounded-full">
              <BsInstagram />
            </div>
          </div>
          <div className="card-body relative bottom-6">
            <h2 className="card-title text-2xl font-bold mx-auto">
              Dr. Ken Moris
            </h2>
            <p className="text-lg mx-auto">Clinical Surgery</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Team;
