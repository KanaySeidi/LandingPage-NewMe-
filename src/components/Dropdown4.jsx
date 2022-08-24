import React, { useState } from "react";
import result1 from "../images/course/Frame4.svg";
import time from "../images/course/time.svg";

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = [
    <ul>
      <li>
        <span>
          Программу этого модуля я решила не раскрывать, потому что по итогу
          этого модуля ты поймешь, как масштабировать свой бизнес и вывести на
          стабильный доход 50.000-100.000 в месяц полностью из дома, здесь я
          расскажу, как я выстроила свой магазин, который делает по 500-700.000
          в месяц
        </span>
      </li>
    </ul>,
  ];
  return (
    <div>
      <div className="dropdown-body">
        <div className="dropdown">
          <div
            className="dropdown-btn4"
            onClick={(e) => setIsActive(!isActive)}
          >
            <span className="module1">Модуль-4</span>{" "}
            <span className="module-theme1">Секретный модуль</span>
          </div>
          {isActive && (
            <div className="dropdown-content4">
              {options.map((option) => (
                <div
                  onClick={(e) => {
                    setSelected(option);
                    setIsActive(false);
                  }}
                  className="dropdown-item"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
