import React from "react";

const Services = () => {
  return (
    <>
    <div id="service">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-center pt-10">
          Our Services
        </h2>
        <p className="text-center py-4 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          recusandae?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-10 md:mx-10 lg:mx-20 py-10">
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img src="/image/1.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Cardiology</h2>
            <p className="text-lg text-center">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              corrupti.
            </p>
          </div>
        </div>

        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img src="/image/2.jpg" alt="eye" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Eye Care</h2>
            <p className="text-lg text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, sequi!
            </p>
          </div>
        </div>

        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img src="/image/1.jpg" alt="neurology" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Neurology</h2>
            <p className="text-lg text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              vero.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Services;
