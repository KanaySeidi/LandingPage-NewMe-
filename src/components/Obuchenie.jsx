import React from "react";
import frame from "../images/img/frame.png";
import amalia from "../images/img/amalia.png";
import narin from "../images/img/narin.png";
import goalblue from "../images/img/goalblue.png";
import rectangle from "../images/img/rectangle.png";
import rec2 from "../images/img/rec2.png";
import rec3 from "../images/img/rec3.png";
import megaphone from "../images/img/megaphone.png";
import bubble from "../images/img/bubble.png";
import frame5 from "../images/img/frame5.png";
import right from "../images/img/right.png";
import left from "../images/img/left.png";
const Obuchenie = () => {
  return (
    <div>
      <div className="wrapper">
        <button>Обучение для тебя,если ты....</button>
      </div>
      <div className="wrapper-2">
        <div className="container">
          <div className="frame-img">
            {/* <img src="img/frame.png" alt="ghjkkl" /> */}
            <img src={frame} alt="ghjhk" />
          </div>
          <div className="rec-df">
            <div className="text">
              <h2 className="text-domoxoz">
                Домохозяйка или мамочка в декрете
              </h2>
              <h2 className="text-hochesh">
                Хочешь начать свое дело и зарабатывать из дома{" "}
              </h2>
            </div>
            <div className="rec-block">
              <img src={rectangle} alt="" />
            </div>
            <div className="rec2-block">
              <img src={rec2} alt="" />
            </div>
            <div className="rec3-block">
              <img src={rec3} alt="" />
            </div>
          </div>
          <div className="df">
            <div className="left-block">
              <img src={amalia} alt="" />
              <button className="amalia-btn">@amalia_dress_bishkek</button>
            </div>
            <div className="right-block">
              <div className="text_do">
                До курса:
                <br />
                <span>
                  Жила на Ысык-куле, работала по найму, мечтала о своем бизнесе,
                  потом вышла в декрет, пробовала начать свое дело, но не
                  хватало знаний и поэтому бизнес не пошел, потратила много
                  времени и денег и потеряла веру в себя и боялась рисковать
                </span>
              </div>

              <div className="text_posle">
                После курса:
                <span>
                  Приехала в Бишкек, нашла мотивацию и заново поверила в себя,
                  за 1,5 недели обучения выбрала нишу для бизнеса, нашла
                  поставщиков, научилась всем инструментам по продвижению и
                  запустила свой онлайн-магазин, без вложений в товар за 5 дней
                  получила 40 заявок и сделала 10 продаж на 15.000 сом, окупила
                  стоимость курс в 7 раз, а это только начало
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="line_goalblue">
          <img src={goalblue} alt="" className="goal_blue" />
          <div className="line_blue"></div>
        </div>
        <div className="container">
          <div className="main-block">
            <div className="main-left__block">
              <h2 className="main-left__block-nur">
                <span>Нурзат</span> – 25 лет проживает в Бишкеке, один ребенок
              </h2>

              <h2 className="main-left__block-do">
                До курса:
                <br />
                <span>
                  Сидела дома в декрете, подрабатывала тем, что шила одежду на
                  заказ для знакомых, но это приносило мало денег и занимало
                  много времени, мечтала отдать дочку в садик и начать свой
                  онлайн-бизнес, чтобы зарабатывать на своих хотелки и подарки
                  ребенку
                </span>
              </h2>

              <h2 className="main-left__block-posle">
                После курса:
                <br />
                <span>
                  За 1,5 недели обучения выбрала нишу для бизнеса, нашла
                  поставщиков, научилась всем инструментам по продвижению и
                  запустила свой онлайн-магазин, без вложений в товар за 5 дней
                  получила 43 заявок и сделала{" "}
                  <span className="main-left__block-prodaj">
                    9 продаж на 13.500 сом, окупила стоимость курс в 6 раз
                  </span>{" "}
                  и еще 10 клиентов ждут, когда она завезет товар
                </span>
              </h2>
            </div>

            <div className="main-right__block">
              <img src={narin} alt="" />
              <button className="narin-btn">@narin.modest</button>
            </div>
          </div>
        </div>
      </div>

      <div className="janyl">
        <div className="line"></div>
        <div className="janyl-d">
          <div className="jahyl-df-text">
            <h2>Уже начала бизнес или предоставляешь услуги</h2>
            <h3>Хочешь увеличить кол-во клиентов и прибыли в своем деле</h3>
          </div>
          <div className="janyl-df-megaphone">
            <img src={megaphone} alt="" />
          </div>
        </div>
        <div className="janyl-df">
          <div className="janyl-left-block">
            <img src={bubble} alt="" />
            {/* <img className="left-img2" src={frame3} alt="" /> */}
            <button className="bubble-btn">@bubble.kg</button>
            <div className="right-rec">
              <img src={right} alt="" />
            </div>
            <div className="left-rec">
              <img src={left} alt="" />
            </div>
          </div>
          <div className="janyl-right-block">
            <h2 className="janyl-right__block-bub">
              <span>Жаныл</span> – 31 год, мама 2 детей (бремена третим)
            </h2>
            <div className="text_do">
              До курса:
              <br />
              <span>
                Попробовал себя в разных направлениях и недавно открыла бизнес
                “оформление фотозон шарами” но клиентов было не так много, как
                хотелось, хотела успеть до родов выстроить бизнес, который будет
                ее обеспечивать в декрете
              </span>
            </div>

            <div className="text_posle">
              После курса:
              <br />
              <span>
                За 1,5 недели обучения научилась всем инструментам по
                продвижению и переупаковала свой бизнес, запустила рекламу,
                нашла новых клиентов, сделала продаж на{" "}
                <span className="okupila">
                  60.000 сом и окупила стоимость курса в 30 раз
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="frame-line">
          <img src={frame5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Obuchenie;
