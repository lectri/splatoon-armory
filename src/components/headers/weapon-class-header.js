import { Link } from "gatsby";
import React from "react";
import GenericHeader from "./generic-header";
import {
    HeaderElementList,
    HeaderElement

} from '../../css/header.module.css';

// The header that will be used at the top of every page in the weapon class section
const WeaponHeader = () => {
    return (
        <div className='WeaponHeader'>
            <GenericHeader>
                <ul className={HeaderElementList}>
                    <li className={HeaderElement}><Link to='../shooter'>Shooter</Link></li>
                    <li className={HeaderElement}><Link>Roller</Link></li>
                    <li className={HeaderElement}><Link>Charger</Link></li>
                    <li className={HeaderElement}><Link>Slosher</Link></li>
                    <li className={HeaderElement}><Link>Splatling</Link></li>
                    <li className={HeaderElement}><Link>Dualies</Link></li>
                    <li className={HeaderElement}><Link>Brellas</Link></li>
                </ul>
            </GenericHeader>
        </div>
    )
    
}

export default WeaponHeader;