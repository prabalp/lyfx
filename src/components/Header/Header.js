import React from 'react'

import HeaderOption from './HeaderOption'
import './Header.css';
import logo from '../../Imgs/logo.png'

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className='header' >
            <div className="headerLeft">
                <img
                    src={logo}
                    alt="logo"
                />

                <div className="headerSearch">
                    <SearchIcon style={{ color: 'black' }}/>
                    <input type="text"  placeholder="Search"/>
                </div>
            </div>
            
            <div className="headerRight">
                <HeaderOption Icon={HomeIcon} title ="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title ="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title ="Jobs"/>
                <HeaderOption Icon={ChatIcon} title ="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title ="Notifications"/>
                <HeaderOption avatar= {true} title ="Log Out" onClick ={{/*logoutOfApp*/}}/>


            </div>
            
        </div>
    )
}

export default Header
