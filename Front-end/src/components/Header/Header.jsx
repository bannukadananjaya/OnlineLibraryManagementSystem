import {useState,useContext} from 'react'
import { AuthContext } from '../../context/AuthContext'

import { Link } from 'react-router-dom' 
import './Header.css'

import MenuIcon from '@mui/icons-material/Menu'
import ClearIcon from '@mui/icons-material/Clear'


const Header = () => {
 
    const {user} =useContext(AuthContext);
    const [menutoggle, setMenutoggle] = useState(false)

    const Toggle = () => {
        setMenutoggle(!menutoggle)
    }

    const closeMenu = () => {
        setMenutoggle(false)
    }

    return (
        <div className="header">
            <div className="logo-nav">
            <Link to='/'>
                <a href="#home">LIBRARY</a>
            </Link>
            </div>
            
            <div className='nav-right'>
                <input className='search-input' type='text' placeholder='Search a Book'/>
                <ul className={menutoggle ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/'>
                            <a href="#home">Home</a>
                        </Link>
                    </li>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/books'>
                        <a href="#books">Books</a>
                        </Link>
                    </li>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/about'>
                        <a href="#about">About</a>
                        </Link>
                    </li>
                    {(user==null)?
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/signin'>SignIn</Link>
                    </li>:<>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/signin'>Profile</Link>
                    </li></>}
                    
                </ul>
            </div>

            <div className="mobile-menu" onClick={() => { Toggle() }}>
                {menutoggle ? (
                    <ClearIcon className="menu-icon" style={{ fontSize: 40 }} />
                ) : (
                    <MenuIcon className="menu-icon" style={{ fontSize: 40 }} />
                )}
            </div>
        </div>
  )
}

export default Header;