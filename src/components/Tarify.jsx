import React from "react";
// import "./Tarify.css";
const Tarify = () => {
  return (
    <div className="back">
      <h2 className="tarify-kursa">Тарифы курса</h2>
      <div className="wraper">
        <div className="left-block">
          <div className="block-standart">
            <div className="text-standart">
              <h2>Стандарт</h2>
            </div>
          </div>
          <ul>
            <li>
              Полный доступ к 29 основным <br />
              урокам
            </li>
            <li>25+ раздаточных материалов для практики</li>
            <li>
              Доступ на собственную платформу для удобного обучения через
              телефон или комьютер
            </li>
            <li>
              Доступ к бонусным урокам от пригашенных спикеров Участие в
              розыгрыше призов по окончанию курса
            </li>
            <li>Доступ на эфиры с ответами на вопросы со мной</li>
            <li>Сертификат о прохождении курса</li>
            <li>Общий чат участников</li>
            <li>Доступ к кураторам, которые будут отвечать на вопросы</li>
            <li>Доступ к урокам на 3 месяца после окончания</li>
            <li>Живой и онлайн выпускной по окончанию</li>
          </ul>
          <div className="line"></div>
          <div className="stoimost">
            <h2 className="stoimost-text">
              Стоимость <span>- 5000</span>
            </h2>
            <div className="line2"></div>
          </div>
          <div className="stoimost2">
            <h2>
              Всего-1980 сом/25$
              <br /> до 28 августа
            </h2>
            <h3>Осталось 245 мест</h3>
          </div>
          <button
            onClick={() => window.open("https://wa.me/message/DE7P5KAUMIB6I1")}
            className="zayavka"
          >
            Оставить заявку
          </button>
        </div>

        <div className="left-block right-block">
          <div className="block-standart">
            <div className="text-standart text-nastav">
              <h2>Наставничество</h2>
            </div>
          </div>
          <ul>
            <li>
              Полный доступ к 29 основным <br />
              урокам
            </li>
            <li>25+ раздаточных материалов для практики</li>
            <li>
              Доступ на собственную платформу для удобного обучения через
              телефон или комьютер
            </li>
            <li>
              Доступ к бонусным урокам от пригашенных спикеров Участие в
              розыгрыше призов по окончанию курса
            </li>
            <li>Доступ на эфиры с ответами на вопросы со мной</li>
            <li>Сертификат о прохождении курса</li>
            <li>Общий чат участников</li>
            <li>Доступ к кураторам, которые будут отвечать на вопросы</li>
            <li>Доступ к урокам на 3 месяца после окончания</li>
            <li>Живой и онлайн выпускной по окончанию</li>
          </ul>
          <div className="lines">
            <ul className="ul_last">
              <li className="bluebg">4 индивидуальные встречи со мной</li>
              <li className="bluebg">личная поддержка от меня </li>
              <li className="bluebg">реклама в моем блоге</li>
            </ul>
          </div>
          <div className="stoimost">
            <h2 className="stoimost-text">
              Стоимость <span>- 85.000</span>
            </h2>
            <div className="line2"></div>
          </div>
          <div className="stoimost2">
            <h2>
              Всего-49.900 сом/600$
              <br /> до 28 августа
            </h2>
            <h3>Осталось 1 мест</h3>
          </div>
          <button
            onClick={() => window.open("https://wa.me/message/DE7P5KAUMIB6I1")}
            className="zayavka"
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tarify;
