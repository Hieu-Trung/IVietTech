import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
const SlideMenu = () => {
    const [showHide, setShowHide] = useState(true)
    const hide = {
        'position': 'absolute',
        'top': 0,
        'left': '-100vw',
        'transition': '0.3s',
        'zIndex': 1,
        'width': '100vw',
        'height': '100vh',
        'backgroundColor': 'yellow',
    }
    const show = {
        'position': 'absolute',
        'top': 0,
        'left': '0',
        'zIndex': 1,
        'width': '100vw',
        'height': '100vh',
        'backgroundColor': 'yellow',
        'transition': '0.3s',
    }
    const styleIcon = {
        'cursor': 'pointer',
        'fontSize': '20px',
        'padding': '5px'
    }
    const stylePage = {
        'width': '100vw',
        'height': '100vh',
        'margin': 0,
        'zIndex': 0,
    }
    const styleUl = {
        'listStyle': 'none',
        'padding': 0,
        'margin': 0,
        'fontWeight': 'bold',
    }
    const styleLi = {
        'padding': '5px',
        'cursor': 'pointer',
    }
    const handleMenu = () => {
        setShowHide(!showHide)
    }
    return (
        <div>
            <div style={stylePage}>
                <AiOutlineMenu
                    onClick={handleMenu}
                    style={styleIcon}
                />
            </div>
            <div style={showHide ? hide : show} onClick={handleMenu}>
                <ul style={styleUl}>
                    <li style={styleLi}>Menu</li>
                    <li style={styleLi}>Account</li>
                </ul>
            </div>
        </div>
    )
}

export default SlideMenu