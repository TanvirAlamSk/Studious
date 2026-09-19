import React from "react";
import Navber from "./components/navber";
import Banner from "./components/Banner";
import Status from "./components/Status";
import Studying from "./components/Studying";
import Feature from "./components/Feature";
import HowItWorks from "./components/HowItWorks";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import Questions from "./components/Questions";
import NextStudyCard from "./components/NextStudyCard";
import Footer from "./components/footer";

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
        <Pricing></Pricing>
        <Questions></Questions>
        <NextStudyCard></NextStudyCard>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
