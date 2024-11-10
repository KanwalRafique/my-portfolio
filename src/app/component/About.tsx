import Image from "next/image";

const About1 = () => {
  return (
    <div className="py-12 px-5 flex justify-center items-center overflow-hidden">
      <div className="bg-pink-300 shadow-lg rounded-lg p-6 sm:p-10 max-w-7xl flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="flex justify-center items-center w-full md:w-[30%]">
          <Image
            src={"/home-pic-jpeg.jpg"}
            alt="Muhammad Samad"
            width={700}
            height={700}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"/>
        </div>
        <div className="w-full md:w-1/2 font-serif text-center md:text-left">
          <h2 className="text-xl sm:text-2xl text-gray-800 mb-3">About Me</h2>
          <h1 className="text-2xl sm:text-3xl text-gray-800 mb-3">
            I am <span className="text-indigo-700">Kanwal Rafiqe</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mt-4">
          Aspiring web developer focused on mastering TypeScript, React, and Next.js to create efficient, high-performance web applications. Driven by a passion for coding and innovation, I’m continuously expanding my knowledge of emerging technologies to build impactful solutions.


          </p>
        </div>
      </div>
    </div>
  );
};

export default About1;