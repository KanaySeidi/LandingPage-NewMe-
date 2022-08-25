import React, { useState } from "react";
import "./Collapse.css";

const Collapse = ({ faq }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="question">
      <div className="question-wrapper">
        <h4 className="question-txt" onClick={(e) => setActive(!active)}>
          {faq.question}

          {active ? (
            <svg
              className="collapse-svg"
              width="29"
              height="16"
              viewBox="0 0 29 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.51616 15.4291L0.672852 13.6351L14.6315 0.0493164L28.5899 13.6351L26.7466 15.4291L14.6315 3.63784L2.51616 15.4291Z"
                fill="#A0C5D9"
              />
            </svg>
          ) : (
            <svg
              className="collapse-svg"
              width="29"
              height="17"
              viewBox="0 0 29 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.2368 0.5L28.0801 2.4247L14.1215 17L0.163016 2.4247L2.00632 0.5L14.1215 13.1501L26.2368 0.5Z"
                fill="white"
              />
            </svg>
          )}
        </h4>
      </div>
      <span className={`answer-txt ${!active ? "hide" : ""}`}>
        {faq.answer}
      </span>
    </div>
  );
};

export default Collapse;
