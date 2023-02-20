
import React from "react";
import { slide as Menu } from 'react-burger-menu';


function Burger() {
    return<>
    <Menu styles={styles} className="BurgerIcon">
            
        <a href="/contact" id="contact" className="menu-item">Contact</a>
        <a href="/info" id="info" className="menu-item">Info</a>
        <a href="/about" id="about" className="menu-item">About</a>
        <a onClick={Burger} className="menu-item-small" href="/">Settings</a>
    </Menu>
    </>
}
const styles = {
   
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '36px',
        right: '36px',
        top: '36px'
    },
    bmBurgerBars: {
        background: '#fff'
    },
    bmBurgerBarsHover: {
        background: '#373a47'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        postion: 'fixed'
    },
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15 em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'inline-block'
    },
    bmOverlay:{
        background: 'rgba(0, 0, 0, 0.3)'
    }
}

export default Burger;



