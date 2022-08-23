import React from "react";
import rectangle from "../images/header/header-hero.png";
import dollary1 from "../images/header/dollary1.svg";
import dollary2 from "../images/header/dollary2.svg";
import phoneHand from "../images/header/phoneHand1.png";
import instagram from "../images/header/instagram1.svg";
import message from "../images/header/massage.svg";
import phonePic from "../images/header/image 34.svg";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header">
        <div>Программа курса</div>
        <div>logo</div>
        <div>+996 (553) 300 555</div>
      </div>

      <div className="header__text">
        <div className="header__left-text">
          Запусти свой бизнес в <br />
          Instagram из дома и <br />
          выйди на доход <span className="stonks">от</span>{" "}
          <span className="stonks__number">50.000</span> <br />
          <span className="stonks">до</span>{" "}
          <span className="stonks__number">150.000</span> за 1 месяц на <br />
          на курсе <span className="newMe">"НОВАЯ Я"</span>
        </div>
        <button className="header__left-btn">Принять участие</button>
      </div>
      <div className="header__right-img">
        <div>
          <img className="rectangle" src={rectangle} alt="rectangle img" />
        </div>
        <div>
          <img src={dollary1} alt="money img" className="dollary1" />
        </div>
        <div>
          <img src={dollary2} alt="money img" className="dollary2" />
        </div>
      </div>
      <div className="header__video">
        <div>
          <img src={phoneHand} alt="hands img" className="phoneHand" />
          <img src={phonePic} alt="instagram" className="phonePic" />
        </div>
        <div className="header__video-container">
          <div className="header__video-text">
            Посмотри видео и узнай, что ты получишь на <br />
            курсе "НОВАЯ Я"
          </div>
          <div>
            <img src={instagram} alt="instagram img" className="instagram" />
          </div>
          <div>
            <img src={message} alt="message img" className="message" />
          </div>
          <div className="header__video-video">
            <video src=""></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
