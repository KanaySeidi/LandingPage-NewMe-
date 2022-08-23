import React, { useState } from "react";
import result1 from "../images/course/Result1.svg";
import time from "../images/course/time.svg";

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = [
    <ul>
      <li>
        <span>
          Как проработать свои страхи и неуверенности перед стартом любых
          проектов
        </span>
      </li>
      <li>
        <span>
          Как выявить свои настоящие цели и постановка целей на время курса, в
          личной жизни и в бизнесе
        </span>
      </li>
      <li>
        <span>
          Уроки от секретного спикера (психолога) на тему: как найти общий язык
          с близкими, чтобы они поддерживали вас в ваших начинаниях и как
          прокачать в себе женственность
        </span>
      </li>
      <li>
        <span>
          Тайм-менеджмент: Как будучи домохозяйкой успевать в личной жизни и
          построить успешный бизнес?
        </span>
      </li>
      <li>
        <span>
          Вводный урок про бизнес в инстаграм. Какие направления можно выбрать в
          2022 году, чтобы зарабатывать из дома и разбор основ бизнеса
        </span>
      </li>
    </ul>,
  ];
  return (
    <div>
      <div className="dropdown-body">
        <div className="dropdown">
          <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
            <span className="module1">Модуль-1</span>{" "}
            <span className="module-theme1">
              Проработка страхов и постановка целей на запуск бизнеса
            </span>
          </div>
          {isActive && (
            <div className="dropdown-content">
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
                <img src={time} alt="" className="time-icon" />
                <span className="time-txt">7 уроков</span>
              </div>
              <div>
                <img src={result1} alt="" className="result1" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
