import React from 'react';
import Links from './Links';
import logo from '../asset/images/footerLogo.png';



const Header = () => {
    return (
        <div>
            <div className="empty-head"></div>
            <div className="main-head">
                <div className="right">
                    <img src={logo} width="150px" />
                <Links linkLable=" درباره ما" classes="btn--light" />
                <Links linkLable=" کسب و کار" classes="btn--light-green" />
                <Links linkLable=" پشتیبانی" classes="btn--light" />
                <Links linkLable=" سوالات متداول" classes="btn--light" />

                </div>

                <div className="left">
                <Links linkLable="فروشگاه من" classes="btn--green" />
                </div>
            </div>
            
        </div>
    )
}

export default Header;