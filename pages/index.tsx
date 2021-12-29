import { NextPage } from "next";

import Footer from "../components/footer";
import Hero from "../components/hero";

// import styles from "./index.module.css";

const IndexPage: NextPage = () => {
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
};

export default IndexPage;
