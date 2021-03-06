import * as React from "react";
import IndexHeader from "../components/headers/index-header";
import * as Style from '../css/main.module.css';
import { Helmet } from 'react-helmet';

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <title>Splatoon Armory</title>
      </Helmet>
      <IndexHeader/>
      <h1 className={Style.heading}>Home</h1>
      <p className={Style.description}>Welcome to the Splatoon 2 Armory. We're all about Splatoon 2's guns and fighting tactics. 
      Check out the links in the header to learn more.
      </p>
    </div>
  );
}

export default IndexPage;