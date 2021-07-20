import React from 'react'
import "./HeaderOption.css"

import { Avatar } from '@material-ui/core';


function HeaderOption({ avatar, Icon, title, onClick }) {
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOptionIcon" />}
            {avatar && (
                <Avatar className="headerOptionIcon"> ⬇
                </Avatar>
            )}
            <h3 className="headerOptionTitle">{title}</h3>
        </div>
    )
}

export default HeaderOption
