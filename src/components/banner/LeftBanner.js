import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Ui/Ux Designer.", "Full Stack Developer.", "Frontend Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-3xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">RAJAPANDIAN P</span>
        </h1>
        <h2 className="text-2xl font-bold text-white">
          I'm a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm currently pursuing my Final year in B.E. Computer Science Engineering at Nadar Saraswathi College of Engineering and Technology. I have a strong passion for UI/UX designing and front-end development, along with expertise in Bootstrap and Figma. I believe in creating visually appealing and user-friendly websites that provide a seamless experience. Feel free to explore my portfolio to view my resume and projects
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner