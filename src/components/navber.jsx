import React, { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { LuNotebookText } from "react-icons/lu";

const Navber = () => {
  const [state, setState] = useState(false);

  useEffect(()=>{
    const screenSize=()=>{
      if(window.innerWidth>768){
        setState(false);
      }
    }

    screenSize();
    window.addEventListener("resize",screenSize);

  },[])



  return (
    <nav className="p-4 z-1 sticky top-0 w-full bg-#F1F2EC/80 bg-opacity-40 backdrop-blur-lg">
      <div className="max-w-280 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <LuNotebookText className="w-8 h-8 p-1.5 rounded-md text-white bg-[#0E7C66] mr-1.5" />
          <span className="font-extrabold text-xl text-gray-900">
            studyFlow
          </span>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-3.5 text-gray-600 text-sm">
            <a href="">
              <li>Features</li>
            </a>
            <a href="">
              <li>How it works</li>
            </a>
            <a href="">
              <li>Pricing</li>
            </a>
            <a href="">
              <li>FAQ</li>
            </a>
          </ul>
        </div>
        <div className="hidden md:block">
          <button className="text-sm font-medium mr-3 text-black">
            Log in
          </button>
          <a>
            <button className="bg-[#0B6553] text-white px-2.5 py-2 rounded-xl text-sm font-medium">
              Get Started
            </button>
          </a>
        </div>
        <div className="block  md:hidden">
          <FaBarsStaggered
            onClick={() => setState(!state)}
            className="text-[#0B6553] font-extrabold"
          />
          {/* <RxCross1 /> */}
        </div>
      </div>
      <div
        className={`p-5 bg-[#F3F4EE] fixed left-0 right-0 transition-all duration-900 ease-in-out transform  ${state ? "top-16" : "-top-100"}`}
      >
        <div>
          <ul className="flex flex-col gap-3.5 text-gray-600 text-sm">
            <a href="">
              <li>Features</li>
            </a>
            <a href="">
              <li>How it works</li>
            </a>
            <a href="">
              <li>Pricing</li>
            </a>
            <a href="">
              <li>FAQ</li>
            </a>
            <a href="">
              <button className="text-sm font-medium text-black">
                Log in
              </button>
            </a>
            <a href="">
              <button className="bg-[#0B6553] text-white w-full py-2 rounded-xl text-sm font-medium">
                Get Started
              </button>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
