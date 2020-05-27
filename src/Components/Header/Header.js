import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

// add condtional render for h1 to dissappear when on home...larger name in picture of body? might need to add state to App for onHome?

const Header = () => {
    return (
        <header>
            <NavLink exact to="/dave-pernitz-portfolio"
            className="name-link"
            activeClassName="name-link-active">
                dave pernitz
            </NavLink>
            <nav>
                <ul>
                    <NavLink exact to="/dave-pernitz-portfolio" className="nav-button" activeClassName="nav-button-active">
                        <li>home</li>
                    </NavLink>

                    <NavLink to="/dave-pernitz-portfolio/about" className="nav-button" activeClassName="nav-button-active">
                        <li>about</li>
                    </NavLink>

                    <NavLink to="/dave-pernitz-portfolio/projects" className="nav-button" activeClassName="nav-button-active">
                        <li>projects</li>
                    </NavLink>

                    <NavLink to="/dave-pernitz-portfolio/workeducation" className="nav-button" activeClassName="nav-button-active">
                        <li>work/education</li>
                    </NavLink>

                    <NavLink to="/dave-pernitz-portfolio/contact" className="nav-button" activeClassName="nav-button-active">
                        <li>contact</li>
                    </NavLink>

                </ul>
            </nav>
        </header>
    )
}

export default Header