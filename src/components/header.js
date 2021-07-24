import * as React from 'react';
import { Link } from 'gatsby';
import {
    Heading,
    HeaderElementList,
    HeaderElement
} from '../css/header.module.css';

const Header = ({ pageTitle }) => {
    return (
        <div className='Header'>
            <nav>
                {/* If there's no link that means the section hasn't been added yet*/}
                <ul className={HeaderElementList}>
                    <li className={HeaderElement}><Link>Main Weapon Classes</Link></li>
                    <li className={HeaderElement}><Link>Sub-Weapons</Link></li>
                    <li className={HeaderElement}><Link>Special Weapons</Link></li>
                </ul>
            </nav>
            <h1 className={Heading}>{pageTitle}</h1>
        </div>
    );
}

export default Header;