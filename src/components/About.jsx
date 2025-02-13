import React from "react";

function About() {
  return (
    <div className="w-full bg-[#CDEA68] p-20 rounded-tl-3xl rounded-tr-3xl">
      <h1 className=" font-['Neue_Montreal'] text-[4vw] leading-[3.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>

      <div className="w-full flex gap-5 border-t-[1px] border-[#97ac4d] pt-10 mt-20">
        <div className="w-1/2">
            <h1 className="text-5xl leading-[3.5vw] tracking-tight font-semibold font-['Neue_Montreal'] ">Our approach:</h1>
            <button className="mt-10 px-10 py-6 bg-zinc-900 rounded-full text-white flex items-center gap-5" >Read More 
                <div className="w-2 h-2 bg-white rounded-full mt-1"></div>
            </button>
        </div>

        <div className="w-1/2 h-[70vh] bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')] rounded-3xl"></div>

      </div>




    </div>
  );
}

export default About;
