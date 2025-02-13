import React from "react";

function Cards() {
  return (
    <div className="w-full  h-screen flex items-center px-15 gap-5 ">
      <div className="card-container w-1/2 h-[60vh] ">
        <div className="card relative w-full h-full bg-[#004D43] rounded-2xl flex items-center justify-center">
          <div className="logo">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
            <button className="absolute px-5 py-1 rounded-full border-2 text-white border-white left-10 bottom-10">
              {" "}
              &copy; 2019-2022
            </button>
          </div>
        </div>
      </div>

      <div className="card-container w-1/2 h-[60vh] flex gap-5 ">
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-2xl flex items-center justify-center ">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 text-white border-white left-5 bottom-10">
          RATING 5.0 0N CLUTCH
          </button>
        </div>
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-2xl flex items-center justify-center ">
          <img
            className="h-30 w-30 object-cover"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute px-4 py-1 rounded-full border-2 text-white border-white left-5 bottom-10">
           BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
