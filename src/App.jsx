import React from "react";
import Navber from "./components/navber";
import Rough from "./components/Rough";
import Banner from "./components/Banner";
import Status from "./components/Status";
import Studying from "./components/Studying";
import Feature from "./components/Feature";
import HowItWorks from "./components/HowItWorks";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <div className="">
      <Navber></Navber>
      <div className="px-5">
        <Banner></Banner>
        <Status></Status>
        <Studying></Studying>
        <Feature></Feature>
        <HowItWorks></HowItWorks>
        <Reviews></Reviews>
      </div>
      {/* <Rough></Rough> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default App;
