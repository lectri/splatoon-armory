import * as React from 'react';
import { WeaponImage } from '../../../css/layout.module.css';
import * as Style from '../../../css/main.module.css';

// Layout that will be used in every Weapon Class page
const Layout = ({headingTitle, description, image, imageAlt, stats, children}) => {
    return (
        <div>
            <h1 className={Style.Heading}>{headingTitle}</h1>
            <p className={Style.Description}>{description}</p>
            <div className={Style.Children}>
                <h3>Stats</h3>
                {stats}
                {children}
            </div>
            
            <img src={image} alt={imageAlt} className={WeaponImage}></img>
        </div>  
    );
}

export default Layout;