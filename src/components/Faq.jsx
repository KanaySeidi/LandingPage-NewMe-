import React from "react";
import "./FAQ.css";
import question from "../images/FAQ/icon.svg";
import Collapse from "./Collapse";

const faqs = [
  {
    id: 1,
    question:
      "Я никогда не занималась бизнесом и вообще ничего не понимаю, у меня получится?",
    answer: `Да у тебя точно получится, до старта курса я специально запустила
        реалити-шоу в котором дала доступ к этому курсу девочкам Эркеайым, Жаныл
        и Нурзат, они смогли вообще без знаний начать свой дело, значит сможешь
        и ты, также посмотри видео с ними в блоке “результаты учеников”`,
  },
  {
    id: 2,
    question:
      "Я никогда не занималась бизнесом и вообще ничего не понимаю, у меня получится?",
    answer: `Да у тебя точно получится, до старта курса я специально запустила
        реалити-шоу в котором дала доступ к этому курсу девочкам Эркеайым, Жаныл
        и Нурзат, они смогли вообще без знаний начать свой дело, значит сможешь
        и ты, также посмотри видео с ними в блоке “результаты учеников”`,
  },
  {
    id: 3,
    question:
      "Я никогда не занималась бизнесом и вообще ничего не понимаю, у меня получится?",
    answer: `Да у тебя точно получится, до старта курса я специально запустила
        реалити-шоу в котором дала доступ к этому курсу девочкам Эркеайым, Жаныл
        и Нурзат, они смогли вообще без знаний начать свой дело, значит сможешь
        и ты, также посмотри видео с ними в блоке “результаты учеников”`,
  },
  {
    id: 4,
    question:
      "Я никогда не занималась бизнесом и вообще ничего не понимаю, у меня получится?",
    answer: `Да у тебя точно получится, до старта курса я специально запустила
        реалити-шоу в котором дала доступ к этому курсу девочкам Эркеайым, Жаныл
        и Нурзат, они смогли вообще без знаний начать свой дело, значит сможешь
        и ты, также посмотри видео с ними в блоке “результаты учеников”`,
  },
  {
    id: 5,
    question:
      "Я никогда не занималась бизнесом и вообще ничего не понимаю, у меня получится?",
    answer: `Да у тебя точно получится, до старта курса я специально запустила
        реалити-шоу в котором дала доступ к этому курсу девочкам Эркеайым, Жаныл
        и Нурзат, они смогли вообще без знаний начать свой дело, значит сможешь
        и ты, также посмотри видео с ними в блоке “результаты учеников”`,
  },
  {
    id: 6,

    question:
      "Я никогда не занималась бизнесом и вообще ничего не понимаю, у меня получится?",
    answer: `Да у тебя точно получится, до старта курса я специально запустила
        реалити-шоу в котором дала доступ к этому курсу девочкам Эркеайым, Жаныл
        и Нурзат, они смогли вообще без знаний начать свой дело, значит сможешь
        и ты, также посмотри видео с ними в блоке “результаты учеников”`,
  },
];

const Faq = () => {
  return (
    <div>
      <div className="FAQ-section">
        <div className="FAQ-container">
          <img src={question} alt="" className="FAQ-icon" />
          <div className="FAQ">
            <h3>
              Ответы на <span className="question-style">вопросы</span>
            </h3>
            {faqs.map((item) => {
              return <Collapse key={item.id} faq={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
