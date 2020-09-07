import React from 'react';
import './Header.css';

const Header = () => {


    return (
        <div>
            <div className="introArea">
                <img  src="http://pngimg.com/uploads/microsoft/microsoft_PNG15.png" alt="logo" />
            </div>
            <div className="navArea">
                <nav>
                    <a href="/home">Home</a>
                    <a href="/people">People</a>
                    <a href="/profile">Profile</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;