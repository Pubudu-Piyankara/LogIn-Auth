import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Falcons from 'react-icons/fa'
import { sideNavBarData } from './sideNavBarData'

function SideNavBar() {
  const [sidebar, setSidebar] = useState(false);
  const sideNavBar = () => setSidebar(!sidebar);

  return (
    <> 
    <div>sideNavBar
      <Link to='#' className='menu-bars'>
        <Falcons.FaBars onClick={sideNavBar} />
      </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={sideNavBar}>
        <li className='navbar-toggle'>
          <Link to='#' className='menu-bars'>
            <Falcons.FaBars />
          </Link>
        </li>
        
        {sideNavBarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
    </>
  );
}




export default SideNavBar