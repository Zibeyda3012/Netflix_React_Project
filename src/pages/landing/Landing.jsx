import React from "react";
import Entry from "./components/Entry";
import Arch from "pages/landing/components/Arch";
import TrendingNow from "./components/TrendingNow";
import ReasonsToJoin from "./components/ReasonsToJoin";
import FAQ from "./components/FAQ";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";


const Landing = () => {
  return (
    <div id="landing" className="bg-[#000000] relative overflow-hidden ">
      <Entry></Entry>
      <Arch></Arch>
      <div className="w-full relative px-[144px]">
        <TrendingNow></TrendingNow>
        <ReasonsToJoin></ReasonsToJoin>
        <FAQ></FAQ>
        <GetStarted></GetStarted>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Landing;
