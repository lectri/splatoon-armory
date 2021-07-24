import * as React from 'react';

// The layout that other headers use
const GenericHeader = ({pageTitle, children}) => {
    return (
        <div className='Header'>
            <nav>
                {children}
            </nav>
        </div>
    );
}

export default GenericHeader;