import * as React from 'react';
import favicon from '../../images/favicon.ico';

// The layout that other headers use (also includes favicon)
const GenericHeader = ({children}) => {
    return (
        <div className='Container'>
            <link rel='icon' href={favicon}/>
            <div className='Header'>
                <nav>
                    {children}
                </nav>
            </div>
        </div>
    );
}

export default GenericHeader;