import * as React from 'react';
import { WeaponImage } from '../../../css/layout.module.css';

// Layout that will be used in every Weapon Class page
const Layout = ({headingTitle, description, image, imageAlt, children}) => {
    return (
        <div className='Container'>
            <h1>{headingTitle}</h1>
            <p>{description}</p>
            <h3>Stats</h3>
            {children}
            <img src={image} alt={imageAlt} className={WeaponImage}></img>
        </div>  
    );
}

export default Layout;