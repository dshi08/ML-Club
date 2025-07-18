import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import { Button } from './Button';

function NavBar() {
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true);
    const handleClick = () => setClick(!click);

  return (
    <div>
        <>
         <nav className = "navbar">
            <div className = "navbar-container">
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
            </div>
         </nav>
        
        </>
    </div>
  )
}

export default NavBar
