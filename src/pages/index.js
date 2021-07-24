import * as React from "react";
import IndexHeader from "../components/headers/index-header";


const IndexPage = () => {
  return (
    <div className='IndexPage'>
      <IndexHeader/>
      <h1>Home</h1>
      <p>Welcome to the Splatoon 2 Armory. We're all about Splatoon 2's guns and fighting tatics. 
      Check out the links in the header to learn more.
      </p>
    </div>
  );
}

export default IndexPage;