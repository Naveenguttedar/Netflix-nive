import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <div>
      <Main />
      <section>
        <Row
          rowId={1}
          type={"Up comming"}
          fetchUrl={requests.requestUpComing}
        ></Row>
        <Row
          rowId={2}
          type={"Trending"}
          fetchUrl={requests.requestTrending}
        ></Row>
        <Row
          rowId={3}
          type={"Populor"}
          fetchUrl={requests.requestPopular}
        ></Row>
        <Row
          rowId={4}
          type={"Top rated"}
          fetchUrl={requests.requestTopRated}
        ></Row>
      </section>
    </div>
  );
};

export default Home;
