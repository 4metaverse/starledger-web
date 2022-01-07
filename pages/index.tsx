import { NextPage } from "next";

import Footer from "../components/footer";
import Hero from "../components/hero";
import Roadmap from "../components/roadmap";

// import styles from "./index.module.css";

const IndexPage: NextPage = () => {
  return (
    <>
      <Hero />
      <Footer />
      <Roadmap />
    </>
  );
};

export default IndexPage;
