import React, { useState } from "react";
import Ellipse from "../images/course/Ellipse1.svg";
import frame6 from "../images/course/Frame6.svg";
import frame5 from "../images/course/Rectangle21.svg";
import Module from "./Module";

// Обязательные поля: id, title, ulContent, lessonCount, result, footerText
const modules = [
  {
    id: 1,
    title: "Проработка страхов и постановка целей на запуск бизнеса",
    ulContent: [
      {
        title:
          "Как проработать свои страхи и неуверенности перед стартом любых проектов ",
      },
      {
        title:
          "Как выявить свои настоящие цели и постановка целей на время курса, в личной жизни и в бизнесе",
      },
      {
        title:
          "Уроки от секретного спикера (психолога) на тему: как найти общий язык с близкими, чтобы они поддерживали вас в ваших начинаниях и как прокачать в себе женственность",
      },
    ],
    lessonCount: "7 уроков",
    result:
      " Мы поставим с тобой цели на прохождение курса, разберемся с тем, как тебе правильно совместить домашние дела и бизнес, а главное ты поймешь, что как начать бизнес в инстаграм уже в ближайшие 3-4 недели",
  },
  {
    id: 2,
    title: "Секретный модуль",
    footerText:
      "Программу этого модуля я решила не раскрывать, потому что по итогу этого модуля ты поймешь, как масштабировать свой бизнес и вывести на стабильный доход 50.000-100.000 в месяц полностью из дома, здесь я расскажу, как я выстроила свой магазин, который делает по 500-700.000 в месяц",
  },
  {
    id: 3,
    title: "Секретный модуль",
    footerText:
      "Программу этого модуля я решила не раскрывать, потому что по итогу этого модуля ты поймешь, как масштабировать свой бизнес и вывести на стабильный доход 50.000-100.000 в месяц полностью из дома, здесь я расскажу, как я выстроила свой магазин, который делает по 500-700.000 в месяц",
  },
];

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
        <div className="modules-container">
          {modules.map((item) => {
            return <Module key={item.id} moduleItem={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;
