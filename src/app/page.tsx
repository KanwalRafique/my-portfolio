"use client";
import Image from "next/image";
import "boxicons/css/boxicons.min.css";
import TypingEffect from "@/app/component/Typing";
import About from "./about/page";
import Project1 from "./Project";
import Skills1 from "./component/Skills";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-center p-5 mt-12
      mb-12 gap-10">
        <div className="flex flex-col justify-start gap-2 w-full md:w-[65%] md:mt-1 text-center md:text-left">
          <h3 className="text-lg md:text-[32px] m-0 p-0">Hey, It&apos;s me</h3>
          <h1 className="text-lg md:text-[50px] text-[#b8b6cfd5] m-0 leading-snug p-0">
            Kanwal Rafiqe
          </h1>
          <h3 className="text-base md:text-[30px] m-0 p-0">
            And I&apos;m a{" "}
            <span id="multi-text" className="text-[12px] md:text-base text-white">
              <TypingEffect />
            </span>
          </h3>
          <p className="text-base md:text-[18px] w-full md:w-[90%] lg:w-[80%] mx-auto md:mx-0">
              I am a student of GIAIC, passionate about IT, AI, and the Metaverse. As the Vice Principal at a private sector school, I work on enhancing learning through innovative Learning Management Systems (LMS) and apps, integrating cutting-edge technologies to improve education.
                Currently, I&apos;m deepening my expertise in Next.js,
            building a solid foundation for my journey in full-stack development
            and emerging technologies.
          </p>

          <div className="flex space-x-3 mt-4 mb-4 justify-center md:justify-start">
            <a
              href="https://github.com/KanwalRafique"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 w-20 bg-transparent border border-[#e6d5c8d5] rounded-full text-2xl text-current hover:bg-[#1c0bb4d5] hover:text-white hover:shadow-[0_0_50px_#d2bbd3]"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kanwal-rafique-68040b2b5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 w-20 bg-transparent border border-[#2d0b53d5] rounded-full text-2xl text-current hover:bg-[#1c0bb4d5] hover:text-white hover:shadow-[0_0_50px_#d2bbd3]"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            
          </div>

          <a
            href=""
            className="flex items-center justify-center px-4 py-2 bg-[#727130] rounded-lg shadow-[0_0_1rem_hsl(180,100%,50%)] text-white font-semibold transition-all duration-300 hover:shadow-none w-full sm:max-w-[50%] md:max-w-[40%] lg:max-w-[30%] mx-auto md:mx-0 mt-0"
          >
            Get Resume
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center items-center w-full md:w-[25%] mt-8 md:mt-0">
          <Image
            src={"/about-pic-png.jpg"}
            alt="Kanwal Rafiqe"
            width={500}
            height={500}
            className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[400px] rounded-lg shadow-[0_0_8rem_hsl(303,97%,27%)] transition-all duration-300 ease-in-out hover:shadow-none hover:scale-110"
          />
        </div>
      </div>

      <About />

     <div>
     <h1 className="flex justify-center text-[30px] md:text-[45px] font-semibold p-[1px] text-[#399fc7] font-sans mt-8">
        Pro<span className="text-[#5e3bee] hover: ">ject</span>
      </h1>
      <Project1 />
      </div> 

      <div className="w-full">
        <h1 className="flex justify-center text-[25px] md:text-[35px] font-black p-[1px] text-[#399fc7] font-sans mt-8">
        <span className="text-[#2575fc] p-[1px]">My</span>&nbsp;Expertise
      </h1>
      <Skills1 />
      </div>
    </div>
  );
};

export default Home;