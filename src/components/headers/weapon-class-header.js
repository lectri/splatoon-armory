import { Link } from "gatsby";
import React from "react";
import GenericHeader from "./generic-header";
import * as Style from '../../css/header.module.css';

// The header that will be used at the top of every page in the weapon class section
const WeaponHeader = () => {
    return (
        <div className='WeaponHeader'>
            <GenericHeader>
                <ul className={Style.headerList}>
                    <li className={Style.headerElement}><Link to='/'>Home</Link></li>
                    <li className={Style.headerElement}><Link to='../shooter'>Shooter</Link></li>
                    <li className={Style.headerElement}><Link to='../roller'>Roller</Link></li>
                    <li className={Style.headerElement}><Link to='../charger'>Charger</Link></li>
                    <li className={Style.headerElement}><Link to="../slosher">Slosher</Link></li>
                    <li className={Style.headerElement}><Link to="../splatling">Splatling</Link></li>
                    <li className={Style.headerElement}><Link to="../dualies">Dualies</Link></li>
                    <li className={Style.headerElement}><Link to="../brella">Brellas</Link></li>
                </ul>
            </GenericHeader>
        </div>
    );
    
}

export default WeaponHeader;