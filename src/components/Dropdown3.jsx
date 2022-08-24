import React, { useState } from "react";
import result1 from "../images/course/Frame3.svg";
import time from "../images/course/time.svg";

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = [
    <ul>
      <li>
        <span>Как увеличить продажи в бизнесе?</span>
      </li>
      <li>
        <span>
          Урок от приглашенного спикера (финансовый директор в крупной компании)
          как настроить финансовый учет в бизнесе для новичков и продвинутых
          предпринимателей
        </span>
      </li>
      <li>
        <span>
          Как обрабатывать заявки от клиентов и продавать в 2 раза больше
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
          Секретный урок от психолога (как побороть страхи и расти после первых
          заработанных денег)
        </span>
      </li>
    </ul>,
  ];
  return (
    <div>
      <div className="dropdown-body">
        <div className="dropdown">
          <div
            className="dropdown-btn3"
            onClick={(e) => setIsActive(!isActive)}
          >
            <span className="module1">Модуль-3</span>{" "}
            <span className="module-theme1">
              Систематизация и финансовый учет в бизнесе
            </span>
          </div>
          {isActive && (
            <div className="dropdown-content3">
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
                <img src={time} alt="" className="time-icon3" />
                <span className="time-txt3">7 уроков</span>
              </div>
              <div>
                <img src={result1} alt="" className="result3" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
