import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <>
            <nav>
                <div className="nav-wrapper  blue-grey">
                    <a href="/" className="brand-logo pl-2"><img src="img/mask.png" height="50"></img> Covid Study</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/chart">Chart Compare</Link></li>
                        <li><Link to="/selected">View Selected Country List</Link></li>

                        

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header