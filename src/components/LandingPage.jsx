import React from "react";
import "./LandingPage.css";
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="text-structure">
        {["We Create", "Eye-opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker font-['Test Founders Grotesk X-Cond SmBd'] ">
              <h1 className="heading ">{item}</h1>
            </div>
          );
        })}
      </div>

      <div className="line">
        {['For public and private companies', 'From the first pitch of IPO'].map((item, index) => {
          return(
            <p className="para">{item}</p>
          )
        })}

        <div className="start-box">
          <div className="box">Start the Project</div>
          <div className="circle"> <GoArrowUpRight /> </div>
        </div>


      </div>
    </div>
  );
};

export default LandingPage;
