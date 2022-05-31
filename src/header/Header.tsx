import React from 'react';
import './Header.css';
import HeaderLeftSection from './headerLeftSection/HeaderLeftSection';
import HeaderRightSection from './HeaderRightSection/HeaderRightSection';

function Header() {
    return (
        <div className='header'>
            <div className='header-container'>
                <HeaderLeftSection></HeaderLeftSection>
                <HeaderRightSection></HeaderRightSection>
            </div>
        </div>
    );
}

export default Header;