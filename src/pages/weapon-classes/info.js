import * as React from "react";
import WeaponHeader from "../../components/headers/weapon-class-header";
import * as Style from '../../css/main.module.css';

const WeaponClassesPage = () => {
  return (
    <div className={Style.Container}>
      <WeaponHeader/>
      <h1 className={Style.Heading}>Weapon Classes</h1>
      <p className={Style.Description}>This section of the site is about the different types of weapon classes and what they can do. 
        Click on the header to read about them.
        </p>
    </div>
    

  )
}

export default WeaponClassesPage;