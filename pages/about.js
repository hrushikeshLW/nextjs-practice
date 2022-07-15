import Link from "next/link";
import Header from "../components/header";
import Styles from "../styles/About.module.css";
const About = () => {
  return (
    <div className="container">
      <h1 className={Styles.text}>about</h1>
    </div>
  );
};

export default About;

About.getLayout = function pageLayout(page) {
  return <>{page}</>;
};
