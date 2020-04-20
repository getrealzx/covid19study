import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <>
            <nav>
                <div className="nav-wrapper  blue-grey">
                    <a href="any.com" className="brand-logo">Covid19 Study</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/chart">Chart Compare</Link></li>

                        

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header