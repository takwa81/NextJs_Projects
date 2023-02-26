import About from "../components/UI/About";
import Banner from "../components/UI/Banner";
import Contact from "../components/UI/Contact";
import Portfolio from "../components/UI/Portfolio";
import Services from "../components/UI/Services";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Banner />
      <Services />
      <About />
      <Portfolio />
      <Contact />
    </Fragment>
  )
}
