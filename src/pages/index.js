import * as React from "react";
import Header from "../components/header";
import { Description } from "../css/index.module.css";

const IndexPage = () => {
  return (
    <div className='IndexPage'>
      <Header pageTitle='Home Page'/>
      <p className={Description}>Welcome to the Splatoon 2 Armory. We're all about Splatoon 2's guns and fighting tatics. Check out the links in the header to learn more.</p>
    </div>
  );
}

export default IndexPage;