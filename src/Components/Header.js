import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <span><Link to="/">LOGO</Link></span>
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) => isActive ? 'current-item' : null}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact-details"
                                    className={({isActive}) => isActive ? 'current-item' : null}
                                >
                                    Contact Details
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) => isActive ? 'current-item' : null}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/json-data"
                                    className={({isActive}) => isActive ? 'current-item' : null}
                                >
                                    Json Data
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/products"
                                    className={({isActive}) => isActive ? 'current-item' : null}
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/quotes"
                                    className={({isActive}) => isActive ? 'current-item' : null}
                                >
                                    Custom useFetch Hook
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard"
                                    className={({isActive}) => isActive ? 'current-item' : null}
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;