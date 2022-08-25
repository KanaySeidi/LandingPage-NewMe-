import React from "react";
import "./Auth.css";

const Auth = () => {
  return (
    <>
      <div className="auth-section">
        <div className="auth-container">
          <div className="auth-txt">
            <span>Запись на курс</span>
            <span>Оставьте заявку и мы с Вами свяжемся!</span>
          </div>
          <form>
            <input type="text" name="" id="" placeholder="Имя" />
            <input type="number" name="" id="" placeholder="Номер телефона" />
            <input type="email" name="" id="" placeholder="email" />
            <button type="submit" className="submit-btn">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;
