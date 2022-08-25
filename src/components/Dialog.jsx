import React, { useState } from "react";
import "./Dialog.css";
const Dialog = ({ modalActive, setModalActive }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    tel: "",
    email: "",
  });

  //   setNewUser({
  //     name: "",
  //     tel: "",
  //     email: "",
  //   });

  return (
    <div
      className={`auth-section ${modalActive ? "active" : ""}`}
      onClick={(e) => {
        if (e.target.className === "auth-section active") {
          setModalActive(false);
        }
      }}
    >
      <div
        className="auth-container"
        id="content"
        // onBlur={setModalActive(false)}
      >
        <div className="auth-txt">
          <span>Запись на курс</span>
          <span>Оставьте заявку и мы с Вами свяжемся!</span>
        </div>
        <form>
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
            onClick={(e) => {
              setModalActive(false);
              e.preventDefault();
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
