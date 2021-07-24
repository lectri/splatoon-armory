import * as React from 'react';
import { Link } from 'gatsby';
import GenericHeader from './generic-header';
import {
    HeaderElementList,
    HeaderElement
} from '../../css/header.module.css';

// The header that is used in the home page.
const IndexHeader = ({ pageTitle }) => {
    return (
        <GenericHeader>
                    {/* If there's no link that means the section hasn't been added yet*/}
                <ul className={HeaderElementList}>
                    <li className={HeaderElement}><Link to='/weapon-classes/info'>Main Weapon Classes</Link></li>
                    <li className={HeaderElement}><Link>Sub-Weapons</Link></li>
                    <li className={HeaderElement}><Link>Special Weapons</Link></li>
                </ul>
        </GenericHeader>
        
    );
}

export default IndexHeader;
