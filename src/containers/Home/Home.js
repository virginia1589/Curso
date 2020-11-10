import React from "react";
import ItemCounter from "../../components/ItemCounter/ItemCounter";
import "./Home.css";

const Home = ({ greeting }) => {
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCounter></ItemCounter>
    </div>
  );
};

export default Home;
