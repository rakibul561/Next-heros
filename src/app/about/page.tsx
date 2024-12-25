/* eslint-disable @next/next/no-img-element */
// pages/index.tsx
"use client";

import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";


import Cetagorypage from "../cetagory/page";
import DynamicAnimatedText from "../Component/HoverAnimation/Hover";

import EnterAnimation from "../Component/HoverAnimation/Farmar";

const Home: React.FC = () => {


  return (
    <div className="bg-gray-900 text-white min-h-screen">



      <DynamicAnimatedText text={"about"}></DynamicAnimatedText>


      <div className="max-w-7xl mx-auto">
        <Cetagorypage />
        <main className="flex flex-col md:flex-row mt-16 px-4 items-center md:items-start gap-8">
          {/* Text Section */}
          <div className="flex-1">
          <DynamicAnimatedText text={"get to now me"}></DynamicAnimatedText>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello! I am</h1>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Rakibul Hasan
            </h2>
            <p className="text-xl md:text-2xl text-green-500 mb-8">
              Full Stack Developer
            </p>
            <p className="text-lg md:text-xl mb-6">
              <span className="text-green-500">→</span> Web Developer{" "}
              <span className="text-green-500">→</span> Programmer
            </p>
            <div className="flex space-x-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded">
                Get Resume
              </button>
              <button className="bg-gray-800 border border-green-500 hover:bg-gray-700 text-white px-6 py-2 rounded">
                About Me
              </button>
            </div>
            <div className="mt-10">
              <h3 className="text-lg text-green-500 mb-4">Follow Me</h3>
              <div className="flex space-x-4 text-4xl">
                <a href="#" className="hover:text-green-500">
                  <FaGithub />
                </a>
                <a href="#" className="hover:text-green-500">
                  <FaLinkedin />
                </a>
                <a href="#" className="hover:text-green-500">
                  <FaMedium />
                </a>
                <a href="#" className="hover:text-green-500">
                  <FaFacebook />
                </a>
                <a href="#" className="hover:text-green-500">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* farmer motion use section */}
          <div className="flex-1 ml-44  ">
          <DynamicAnimatedText text={"my image"}></DynamicAnimatedText>
            {/* <img
              src="https://i.ibb.co/b3zRSCs/profile-removebg-preview.png"
              alt=""
              className="h-[500px]  bg-white rounded-lg"
            /> */}
           <EnterAnimation></EnterAnimation>
            
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
