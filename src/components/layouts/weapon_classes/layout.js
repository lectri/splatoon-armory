import * as React from 'react';
import WeaponHeader from '../../headers/weapon-class-header';
import { weaponImage } from '../../../css/layout.module.css';
import * as Style from '../../../css/main.module.css';

// Layout that will be used in every Weapon Class page
const Layout = ({headingTitle, description, image, imageAlt, stats, children}) => {
    return (
        <div>
            <WeaponHeader/> 
            <h1 className={Style.heading}>{headingTitle}</h1>
            <p className={Style.description}>{description}</p>
            <div className={Style.children}>
                <h3>Stats</h3>
                {stats}
                {children}
            </div>
            
            <img src={image} alt={imageAlt} className={weaponImage}></img>
        </div>  
    );
}

export default Layout;