import * as React from "react";
import WeaponHeader from "../../components/headers/weapon-class-header";
import * as Style from '../../css/main.module.css';
import { Helmet } from 'react-helmet';

const WeaponClassesPage = () => {
  return (
    <div>
      <Helmet>
        <title>Armory | Weapon Classes</title>
      </Helmet>
      <WeaponHeader/>
      <h1 className={Style.heading}>Weapon Classes</h1>
      <p className={Style.description}>This section of the site is about the different types of weapon classes and what they can do. 
        Click on the header to read about them.
        </p>
    </div>
  );
}

export default WeaponClassesPage;