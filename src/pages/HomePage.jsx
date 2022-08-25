import { useEffect, useState } from "react";
import "../components/Auth.css";
import AuthModal from "../components/AuthModal";
import Course from "../components/Course";
import Dialog from "../components/Dialog";
import Faq from "../components/Faq";
import Header from "../components/Header";
import Obuchenie from "../components/Obuchenie";
import Tarify from "../components/Tarify";
import Video from "../components/Video";

const HomePage = () => {
  const [modalActive, setModalActive] = useState(false);
  useEffect(() => {
    console.log(modalActive);
  }, [modalActive]);
  return (
    <div>
      <Header setModalActive={setModalActive} />
      <Dialog modalActive={modalActive} setModalActive={setModalActive} />
      <Course />
      <Obuchenie />
      <Tarify />
      <Video />
      <Faq />
    </div>
  );
};

export default HomePage;
