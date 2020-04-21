import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <>

            <nav>
                <div className="nav-wrapper  blue-grey">
                    <a href="/" className="pl-2"><img src="img/mask.png" height="50"></img>Covid Study</a>

                    <ul class="right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/chart">Chart Compare</Link></li>
                        <li><Link to="/selected">Selected Country List</Link></li>
                    </ul>
                </div>
            </nav>
 
        </>
    )
}

export default Header