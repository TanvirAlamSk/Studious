import React from "react";
import { LuNotebookText } from "react-icons/lu";

const Footer = () => {
    const year=new Date().getFullYear()

  return (
    <div className="bg-white">
      <footer className="footer sm:footer-horizontal max-w-280 mx-auto p-10">
        <aside>
          <div className="flex items-center">
            <LuNotebookText className="w-8 h-8 p-1.5 rounded-md text-white bg-[#0E7C66] mr-1.5" />
            <span className="font-extrabold text-xl text-gray-900">
              studyFlow
            </span>
          </div>
          <p className="text-gray-600">
            A study dashboard for turning goals
            <br />
            into daily progress
          </p>
        </aside>
        <nav className="">
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Help center</a>
          <a className="link link-hover">Study tips</a>
          <a className="link link-hover">Contact</a>
        </nav>
      </footer>
      <div className="max-w-280 mx-auto px-10 md:px-0">
        <div className="border-b my-6 border-gray-400"></div>
        <p className="text-xs pb-10 text-gray-500">
          © {year} StudyFlow. Built as teaching material - not a real product.
        </p>
      </div>
    </div>
  );
};

export default Footer;
