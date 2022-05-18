import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import Icon from '@mui/material/Icon';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img
                className='header__logo'
                src="https://www.globaldatinginsights.com/wp-content/uploads/2017/08/Screen-Shot-2017-08-17-at-10.04.531-1024x705.png"
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header
