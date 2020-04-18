import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <>
            <nav>
                <div className="nav-wrapper  blue-grey">
                    <a href="any.com" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/compare">Compare</Link></li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header