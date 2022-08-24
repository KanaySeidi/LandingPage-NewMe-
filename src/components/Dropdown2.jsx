import React, { useState } from "react";
import result2 from "../images/course/Frame3.svg";
import time from "../images/course/time.svg";

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = [
    <ul>
      <li>
        <span>
          ПЕРВЫЕ ШАГИ В СОЗДАНИЕ БИЗНЕС ИНСТАГРАМ. Как определить в каком
          направлении Вам стоит двигаться, чтобы заработать много денег
        </span>
      </li>
      <li>
        <span>
          5 уроков от приглашенного спикера (топового SMM-специалиста и
          маркетолога) по созданию, оформлению и продвижению профиля в Instagram
        </span>
      </li>
      <li>
        <span>Бонусные уроки (мобилография, таргетированная реклама)</span>
      </li>
    </ul>,
  ];
  return (
    <div>
      <div className="dropdown-body">
        <div className="dropdown">
          <div
            className="dropdown-btn2"
            onClick={(e) => setIsActive(!isActive)}
          >
            <span className="module1">Модуль-2</span>{" "}
            <span className="module-theme1">
              7 шагов чтобы запустить свой бизнес из дома и <br /> заработать
              первые 50.000-100.000 сом
            </span>
          </div>
          {isActive && (
            <div className="dropdown-content2">
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
              <div>
                <img src={time} alt="" className="time-icon2" />
                <span className="time-txt2">10 уроков</span>
              </div>
              <div>
                <img src={result2} alt="" className="result2" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
