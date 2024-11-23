import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

/* SCSS LINK */
import '../Navbar/Navbar.scss';

/* REACT ICONS */
import { FaShoppingCart, FaUser } from "react-icons/fa";

function Navbar() {

    return (

        <>
            <Button variant="primary">Primary</Button>
            <div className='header'>
                <div className="sreachBar_AND_Icons">

                    <div className='logo'>
                        <Link to="/">   <img className='w-50' src={require('../../assets/Images/Logo.png')} /></Link>
                    </div>
                    <div className="search_bar">
                        <input className="form-control" placeholder='Search' size="80" />
                    </div>

                    <div className="icons">
                        <FaShoppingCart className='mx-2 fs-4' /> |
                        <FaUser className='mx-2 fs-4' />
                    </div>
                </div>

                <div className="nav_links pt-4">
                    <ul className="">
                        <li className="list-item">
                            <Link to="/shopall" className="nav-link">Shop All</Link>
                        </li>
                        <li className="list-item">
                            <Link to="/periodcare" className="nav-link">Period Care</Link>
                        </li>
                        <li className="list-item">
                            <Link to="/intimatecare" className="nav-link">Intimate Care</Link>
                        </li>
                        <li className="list-item">
                            <Link to="/toilethygiene" className="nav-link"> Toilet Hygiene</Link>
                        </li>
                        <li className="list-item">
                            <Link to='/hairremoval' className="nav-link"> Hair Removal</Link>
                        </li>
                        <li className="list-item">
                            <Link className="nav-link"> Personal Safety</Link>
                        </li>
                        <li className="list-item">
                            <Link className="nav-link">
                                Sexual Wellness</Link>
                        </li>
                        <li className="list-item">
                            <Link className="nav-link">
                                Personal Care</Link>
                        </li>
                        <li className="list-item">
                            <Link className="nav-link">
                                Blog</Link>
                        </li>
                    </ul>
                </div>
            </div >
        </>
    )
}

export default Navbar;