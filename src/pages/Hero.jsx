import React, { useState, useEffect } from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import axios from "axios";
import Footer from "../components/Footer";
const Hero = () => {
  const [_Data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://github.com/Naveenguttedar/Netflix-nive/blob/master/data.json",
      )
      .then((response) => setData(response.data));
    console.log(_Data);
  }, []);
  return (
    <div>
      <Main />
      <section>
        {_Data.map((movie_row, i) => {
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
