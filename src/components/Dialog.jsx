import React, { useState } from "react";
import axios from "axios";
import "./Dialog.css";

const API = "https://sheetdb.io/api/v1/tbbo6gv00zhng";

const Dialog = ({ modalActive, setModalActive }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    tel: "",
    email: "",
  });

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(API, {
        data: { name: newUser.name, tel: newUser.tel, email: newUser.email },
      });
      console.log("Ushpeshno");
      setNewUser({
        email: "",
        name: "",
        tel: "",
      });
    } catch (error) {
      console.log("Ne Ushpeshno");
    }
  }

  return (
    <div
      className={`auth-section ${modalActive ? "active" : ""}`}
      onClick={(e) => {
        if (e.target.className === "auth-section active") {
          setModalActive(false);
        }
      }}
    >
      <div className="auth-container" id="content">
        <div className="auth-txt">
          <span>Запись на курс</span>
          <span>Оставьте заявку и мы с Вами свяжемся!</span>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Имя"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="Номер телефона"
            value={newUser.tel}
            onChange={(e) => setNewUser({ ...newUser, tel: e.target.value })}
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <button
            className="submit-btn"
            type="submit"
            onClick={(e) => {
              setModalActive(false);
            }}
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dialog;
