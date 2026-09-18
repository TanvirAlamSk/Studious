import React from "react";
import { LuNotebookText } from "react-icons/lu";

const Navber = () => {
  return (
    <nav className="py-4 sticky top-0 w-full bg-#F1F2EC/80 bg-opacity-40 backdrop-blur-lg">
      <div className="max-w-280 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <LuNotebookText className="w-8 h-8 p-1.5 rounded-md text-white bg-[#0E7C66] mr-1.5" />
          <span className="font-extrabold text-xl text-gray-900">studyFlow</span>
        </div>
        <div>
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
        <div className="">
            <button className="text-sm font-medium mr-3 text-black">Log in</button>
            <a><button className="bg-[#0B6553] text-white px-2.5 py-2 rounded-xl text-sm font-medium">Get Started</button></a>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
