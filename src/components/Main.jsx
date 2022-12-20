import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";
const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((response) => setMovies(response.data.results));
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) return str.slice(0, num) + "...";
    return str;
  };
  return (
    <div className="max-w-7xl h-[550px] text-white">
      <div className="h-[550px]  max-w-7xl  absolute bg-gradient-to-r from-black to-transparent  ">
        <div className="flex items-end md:items-end h-full">
          <div className="p-4 md:p-8">
            <h2 className="text-3xl md:text-5xl font-bold ">{movie?.title}</h2>
            <div className="my-4">
              <button className="bg-netRed border border-netRed text-white rounded  px-4 py-2">
                Play
              </button>
              <button className=" border border-netRed rounded text-white px-4 ml-4 py-2">
                Watch later
              </button>
            </div>
            <span className="text-sm text-gray-300 font-semibold">
              Released : {movie?.release_date}
            </span>
            <p className="text-lg text-white w-full md:max-w-['70%'] lg:max-w-[50%] xl:max-w-[35%]   ">
              {truncateString(movie?.overview, 150)}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
    </div>
  );
};

export default Main;
