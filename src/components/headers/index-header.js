import * as React from 'react';
import { Link } from 'gatsby';
import GenericHeader from './generic-header';
import * as Style from '../../css/header.module.css';

// The header that is used in the home page.
const IndexHeader = ({ pageTitle }) => {
    return (
        <GenericHeader>
                {/* If there's no link that means the section hasn't been added yet*/}
                <ul className={Style.headerList}>
                    <li className={Style.headerElement}><Link to='/'>Home</Link></li>
                    <li className={Style.headerElement}><Link to='/weapon-classes/info'>Main Weapon Classes</Link></li>
                    <li className={Style.headerElement}><Link>Sub-Weapons</Link></li>
                    <li className={Style.headerElement}><Link>Special Weapons</Link></li>
                </ul>
        </GenericHeader>
        
    );
}

export default IndexHeader;
