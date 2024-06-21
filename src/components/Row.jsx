import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const Row = ({ rowId, type, slides = [] }) => {
  console.log("slides ", slides);
  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  // useEffect(() => {
  //   axios.get(fetchUrl).then((response) => setSlids(response.data.results));
  // }, [fetchUrl]);

  return (
    // <div className=" py-4 ">
    //   <h2 className="py-4 font-bold">{type}</h2>
    //   <div className="relative flex items-center group">
    //     <MdChevronLeft
    //       size={40}
    //       className="bg-white rounded-full absolute z-10 opacity-50 hover:opacity-100 text-gray-700 left-0  hidden group-hover:block"
    //       onClick={slideLeft}
    //     />
    //     <div
    //       id={"slider" + rowId}
    //       className="flex justify-between overflow-x-hidden scroll-smooth w-full h-full "
    //     >
    //       {slides.map((slide) => {
    //         return <Movie key={slide.id} slide={slide} />;
    //       })}
    //     </div>
    //     <MdChevronRight
    //       size={40}
    //       className="bg-white rounded-full absolute opacity-50 hover:opacity-100 text-gray-700 z-10 right-0 hidden group-hover:block"
    //       onClick={slideRight}
    //     />
    //   </div>
    // </div>
    <div className=" py-4 px-2 ">
      <h2 className="py-4 font-bold">{type}</h2>
      <div className="relative flex items-center group">
        <Splide
          id={"slider" + rowId}
          options={{
            gap: "1rem",
            rewind: true,
            drag: "free",
            fixedWidth: "17rem",
            pagination: false,
            easing: "ease",
            breakpoints: {
              820: {
                arrows: false,
              },
            },
          }}
          className="w-full"
        >
          {slides.map((slide) => {
            return <Movie key={slide.id} slide={slide} />;
          })}
        </Splide>
      </div>
    </div>
  );
};

// return (
//   <div className=" py-4 ">
//     <h2 className="py-4 font-bold">{type}</h2>
//     <div className="relative flex items-center group">
//       <MdChevronLeft
//         size={40}
//         className="bg-white rounded-full absolute z-10 opacity-50 hover:opacity-100 text-gray-700 left-0  hidden group-hover:block"
//         onClick={slideLeft}
//       />
//       <div
//         id={"slider" + rowId}
//         className="flex justify-between overflow-x-hidden scroll-smooth w-full h-full "
//       >
//         {slides.map((slide) => {
//           return <Movie key={slide.id} slide={slide} />;
//         })}
//       </div>
//       <MdChevronRight
//         size={40}
//         className="bg-white rounded-full absolute opacity-50 hover:opacity-100 text-gray-700 z-10 right-0 hidden group-hover:block"
//         onClick={slideRight}
//       />
//     </div>
//   </div>
// );
export default Row;
