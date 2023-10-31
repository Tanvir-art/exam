import React from "react";
import { FaUserDoctor, FaStethoscope } from "react-icons/fa6";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";

const About = () => {
  return (
    <>
    <div id="about">
      <div className="pt-10">
        <h2 className="text-4xl font-bold text-center">About Us</h2>
        <p className="text-center text-lg pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          cupiditate.
        </p>
      </div>
      <div className="flex flex-col md:flex-col lg:flex-row justify-center mt-20">
        <div className="flex-1 ml-10 mb-10">
          <img className="rounded" height={300} src="/image/about.jpg" alt="" />
        </div>

        <div className="flex-1 flex items-center text-gray-700 mx-10">
          <div>
            <p>How We Work</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold py-4">
              Our Doctors Will Help You Awaken <br />
              Talent & Take You Forward
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content when looking at its layout. The point of
              using Lorem Ipsum is that amet has a moreorless normal
              distribution of letters as opposed dolor.
            </p>

            <div className="py-6 flex justify-between items-center gap-6">
              <div>
                <FaUserDoctor className="text-3xl text-[#439FE0]" />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold py-3">
                  This Hospital Has A Special Surgeon
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  consequuntur quam labore accusantium nemo saepe.
                </p>
              </div>
            </div>

            <div className="pb-6 flex justify-between items-center gap-6">
              <div>
                <FaStethoscope className="text-3xl text-[#439FE0]" />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold py-3">
                  We're Certified For Testing Covid-19
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  consequuntur quam labore accusantium nemo saepe.
                </p>
              </div>
            </div>

            <div className=" flex justify-between items-center gap-6">
              <div>
                <BsFillArrowThroughHeartFill className="text-3xl text-[#439FE0]" />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold py-3">
                  Good Health Starts With A Healthy Life
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  consequuntur quam labore accusantium nemo saepe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
