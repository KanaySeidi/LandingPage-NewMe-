import Course from "../components/Course";
import Header from "../components/Header";
import Obuchenie from "../components/Obuchenie";
import Tarify from "../components/Tarify";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Course />
      <Obuchenie />
      <Tarify />
    </div>
  );
};

export default HomePage;
