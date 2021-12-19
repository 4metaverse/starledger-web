import { NextPage } from "next";

import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";

// import styles from "./index.module.css";

const IndexPage: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default IndexPage;
