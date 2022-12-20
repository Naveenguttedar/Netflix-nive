import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { SplideSlide } from "@splidejs/react-splide";
const Movie = ({ slide }) => {
  const [like, setlike] = useState(false);
  return (
    <SplideSlide className="inline-block">
      <div className="w-[270px] sm:w-[260px] md:w-[270px] relative   cursor-pointer inline-block lg:w-[280px]">
        <img
          className="h-full w-full object-cover block"
          src={`https://image.tmdb.org/t/p/original${slide?.backdrop_path}`}
          alt={slide?.title}
        />
        <div className="h-full w-full  hover:bg-black/80 opacity-0 hover:opacity-100 absolute top-0 left-0  text-white">
          <p className="text-xs md:text-sm whitespace-normal font-bold flex justify-center items-center h-full text-center">
            {slide?.title}
          </p>
          <p>
            {like ? (
              <FaHeart className="absolute top-4 left-4 text-gray-300" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
        </div>
      </div>
    </SplideSlide>
  );
};

export default Movie;
