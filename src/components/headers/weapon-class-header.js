import { Link } from "gatsby";
import React from "react";
import GenericHeader from "./generic-header";
import * as HeaderStyle from '../../css/header.module.css';

// The header that will be used at the top of every page in the weapon class section
const WeaponHeader = () => {
    return (
        <div className='WeaponHeader'>
            <GenericHeader>
                <ul className={HeaderStyle.HeaderElementList}>
                    <li className={HeaderStyle.HeaderElement}><Link to='../shooter'>Shooter</Link></li>
                    <li className={HeaderStyle.HeaderElement}><Link to='../roller'>Roller</Link></li>
                    <li className={HeaderStyle.HeaderElement}><Link>Charger</Link></li>
                    <li className={HeaderStyle.HeaderElement}><Link>Slosher</Link></li>
                    <li className={HeaderStyle.HeaderElement}><Link>Splatling</Link></li>
                    <li className={HeaderStyle.HeaderElement}><Link>Dualies</Link></li>
                    <li className={HeaderStyle.HeaderElement}><Link>Brellas</Link></li>
                </ul>
            </GenericHeader>
        </div>
    );
    
}

export default WeaponHeader;