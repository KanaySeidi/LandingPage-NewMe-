import React, { useState } from "react";
import Ellipse from "../images/course/Ellipse1.svg";
import frame6 from "../images/course/Frame6.svg";
import frame5 from "../images/course/Rectangle21.svg";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Dropdown3 from "./Dropdown3";
import Dropdown4 from "./Dropdown4";

const Course = () => {
  return (
    <div>
      <div className="course-container">
        <div className="transition">
          <img src={Ellipse} alt="ellipse" />
        </div>
        <div className="course__text-start">
          <img src={frame6} alt="" className="course__text-item1" />
          <img src={frame5} alt="" className="course__text-item2" />
        </div>
        <Dropdown />
        <Dropdown2 />
        <Dropdown3 />
        <Dropdown4 />
      </div>
    </div>
  );
};

export default Course;
