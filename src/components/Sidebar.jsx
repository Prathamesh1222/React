import React from 'react'

import {
BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
BsListCheck, BsMenuButtonWideFill}
    from 'react-icons/bs'

function Sidebar({ openSidebarToggle, OpenSidebar}) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
           
                <div className='sidebar-title'>
                    <div className='sidebar-brand' style={{  color: '#9e9ea4'}}>
                        <BsFillGrid3X3GapFill className='icon_header'  />LPS Reports
                    </div>
                    <span className='icon close_icon' onClick={OpenSidebar}>X</span>
                </div>

                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>
                        <a >
                            <BsGrid1X2Fill className='icon' /> Dashboard
                        </a>
                    </li>

                    {/* <li className='sidebar-list-item'>
                        <a href="">
                            <BsMenuButtonWideFill className='icon' /> Reports
                        </a>
                    </li> */}
              
                </ul>
         
                        
                   
           
        </aside>
    )
}

export default Sidebar