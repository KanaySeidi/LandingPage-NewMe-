import React from "react";
import Ellipse from "../images/course/Ellipse1.svg";
import frame6 from "../images/course/Frame6.svg";
import frame5 from "../images/course/Rectangle21.svg";
import Dropdown from "./Dropdown";

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
      </div>
    </div>
  );
};

export default Course;
