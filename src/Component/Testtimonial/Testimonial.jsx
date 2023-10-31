import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Testimonial.css";

// import required modules
import { Pagination } from "swiper/modules";
const Testimonial = () => {
  return (
    <>
      <div id="testimonial">
        <div>
          <h2 className="text-4xl font-bold pt-20 text-center">
            Our Testimonial
          </h2>
          <p className="text-center text-lg py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            odit.
          </p>
        </div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <div className="py-6">
            <div>
              <SwiperSlide>
                <div className="card card-compact w-96 bg-base-100 shadow-xl my-10">
                  <figure>
                    <img
                      className="h-[200px]"
                      src="/image/t1.jpg"
                      alt="doctor"
                    />
                  </figure>
                  <div className="card-body">
                    <p className="text-center text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus laudantium aut sequi necessitatibus explicabo
                      eligendi!
                    </p>
                  </div>
                  <div className="rating mx-auto py-3">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  </div>
                </div>
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <div className="card card-compact w-96 bg-base-100 shadow-xl my-10">
                  <figure>
                    <img
                      className="h-[200px]"
                      src="/image/t2.jpg"
                      alt="doctor"
                    />
                  </figure>
                  <div className="card-body">
                    <p className="text-center text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus laudantium aut sequi necessitatibus explicabo
                      eligendi!
                    </p>
                  </div>
                  <div className="rating mx-auto py-3">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  </div>
                </div>
              </SwiperSlide>
            </div>
            <div>
              <SwiperSlide>
                <div className="card card-compact w-96 bg-base-100 shadow-xl my-10">
                  <figure>
                    <img
                      className="h-[200px]"
                      src="/image/t3.jpg"
                      alt="doctor"
                    />
                  </figure>
                  <div className="card-body">
                    <p className="text-center text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus laudantium aut sequi necessitatibus explicabo
                      eligendi!
                    </p>
                  </div>
                  <div className="rating mx-auto py-3">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <div className="card card-compact w-96 bg-base-100 shadow-xl my-10">
                  <figure>
                    <img
                      className="h-[200px]"
                      src="/image/t6.jpg"
                      alt="doctor"
                    />
                  </figure>
                  <div className="card-body">
                    <p className="text-center text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus laudantium aut sequi necessitatibus explicabo
                      eligendi!
                    </p>
                  </div>
                  <div className="rating mx-auto py-3">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  </div>
                </div>
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <div className="card card-compact w-96 bg-base-100 shadow-xl my-10">
                  <figure>
                    <img
                      className="h-[200px]"
                      src="/image/t2.jpg"
                      alt="doctor"
                    />
                  </figure>
                  <div className="card-body">
                    <p className="text-center text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus laudantium aut sequi necessitatibus explicabo
                      eligendi!
                    </p>
                  </div>
                  <div className="rating mx-auto py-3">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <div className="card card-compact w-96 bg-base-100 shadow-xl my-10">
                  <figure>
                    <img
                      className="h-[200px]"
                      src="/image/t1.jpg"
                      alt="doctor"
                    />
                  </figure>
                  <div className="card-body">
                    <p className="text-center text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus laudantium aut sequi necessitatibus explicabo
                      eligendi!
                    </p>
                  </div>

                  <div className="rating mx-auto py-3">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
