import React, { useState, useEffect } from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import axios from "axios";
import Footer from "../components/Footer";
const Hero = () => {
  const [_Data, setData] = useState([]);
  useEffect(() => {
    axios.get("../data.json").then((response) => setData(response.data));
  }, []);
  return (
    <div>
      <Main />
      <section>
        {_Data.map((movie_row, i) => {
          console.log(movie_row.movies);
          return (
            <Row
              rowId={i}
              type={movie_row.title}
              slides={movie_row.movies}
            ></Row>
          );
        })}
      </section>
      <Footer />
    </div>
  );
};

export default Hero;
