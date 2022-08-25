import React, { useState } from "react";

const AuthModal = ({ active, setActive, children }) => {
  return (
    <>
      <div
        className={active ? "modal_active" : "modal"}
        onClick={() => setActive(false)}
      >
        <div
          className={active ? "modal__content active" : "modal__content"}
          onClick={(e) => e.preventDefault()}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthModal;
