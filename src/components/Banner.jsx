import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="space-y-8 text-gray-600">
      <p className="p-1 px-2.5 md:px-4 mt-10 md:mt-15 lg:mt-20 bg-white text-sm rounded-3xl w-fit mx-auto border border-gray-300">
        Built for students who like to see progress
      </p>

      <h1 className="text-center text-5xl font-bold ">
        Turn big goals into daily tasks <br className=""></br> you'll actually
        finish
      </h1>

      <p className="max-w-150 mx-auto text-center text-gray-600 ">
        Set a goal, break it into tasks, and watch a progress bar move every
        time you check one off. No spreadsheets, no guessing what to study next.
      </p>

      <span className="flex flex-col md:flex-row gap-2 justify-center items-center">
        <button className="bg-[#0B6553] text-white px-4 py-3 rounded-lg text-md font-lg">
          Start for Free <FaArrowRight className="inline ml-1" />
        </button>
        <button className="bg-white text-black px-4 py-3 rounded-lg text-md font-medium border border-gray-200">
          See How it Works
        </button>
      </span>

      <div className="card max-w-110 bg-white shadow-sm mx-auto mt-10 z-">
        <div className="card-body">
          <div className="flex justify-between">
            <span className="text-md">Today's progresso</span>
            <h2 className="text-xl font-bold">72%</h2>
          </div>
          <progress className="progress text-[#0B6553] bg-gray-200" value="72" max="100"></progress>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li className="border border-gray-200 py-3 px-2 rounded">
              <input type="checkbox" defaultChecked className="checkbox checkbox-success mr-2 peer" />
              <span className="peer-checked:line-through ">High-resolution image generation</span>
            </li>
            <li className="border border-gray-200 py-3 px-2 rounded">
              <input type="checkbox" defaultChecked className="checkbox checkbox-success mr-2 peer" />
              <span className="peer-checked:line-through">Customizable style templates</span>
            </li>
            <li className="border border-gray-200 py-3 px-2 rounded">
              <input type="checkbox" defaultChecked className="checkbox checkbox-success mr-2 peer" />
              <span className="peer-checked:line-through">Batch processing capabilities</span>
            </li>
            <li className="border border-gray-200 py-3 px-2 rounded">
              <input type="checkbox" disabled className="checkbox checkbox-success mr-2 peer" />
              <span className="peer-disabled:text-red-400">AI-driven image enhancements</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
