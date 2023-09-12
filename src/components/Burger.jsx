import { bubble as Menu } from 'react-burger-menu';
//if screen is smaller than laptop size renderhamburger
//use boolean var to set if screen size greater than 

//if the screen size is lessthan that laptop 1024px size do not show burger

 function Burger()  {
    return<>
    
        <Menu styles={styles} className="BurgerIcon">
<<<<<<< HEAD
            <a href="/contact" id="contact" className="menu-item">Contact</a>
            <a href="/info" id="info" className="menu-item">Info</a>
            <a href="/about" id="about" className="menu-item">About</a>
            <a onClick={Burger} className="menu-item-small" href="/">Settings</a>
        </Menu>
=======
        <a href="/contact" id="contact" className="menu-item">Contact</a>
        <a href="/info" id="info" className="menu-item">Info</a>
        <a href="/about" id="about" className="menu-item">About</a>
        <a onClick={Burger} className="menu-item-small" href="/">Settings</a>
    </Menu>
>>>>>>> af17b5e11282af90b7bda7c7e2df27f79d19b662
    </>
         
}

 
const styles = {
   
    bmBurgerButton: {
        position: 'absolute',
        width: '46px',
        height: '46px',
        right: '50px',
        top: '40px'
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
        position: 'fixed'
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
        display: 'block',
        fontSize: '3.15em',
        textDecoration: 'none',
        color: 'white'

    },
    bmOverlay:{
        background: 'rgba(0, 0, 0, 0.3)'
    }
}

export default Burger;


