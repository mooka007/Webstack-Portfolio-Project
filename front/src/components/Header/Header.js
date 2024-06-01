import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import  {useAuthContext}  from '../../hooks/useAuthContext'
import { useLogout } from '../../hooks/useAuthentication'


function Header() {

    const { user } = useAuthContext()
    const {logout } = useLogout()
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        };
    const handleLogout = () => {
        logout()
        window.location.assign('/login');        };
    return (
        <div className="Header bg-zinc-900 w-full">
            <div className="max-w-[1440px] mx-auto py-6 px-10 flex justify-between">
                <div>
                <NavLink to="/">
                                    {/* <img className="h-8 w-70 ml-16" src={logo} alt="Housify logo"></img> */}
                    <h3>HouseFinder</h3>
                </NavLink>
                </div>
                <div className="hidden lg:flex">
                <nav className="flex items-center">
                    {/* home */}
                    <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                        ? "text-purple-500 block p-3 text-lg navlink"
                        : "block p-3 text-lg navlink"
                    }
                    >
                    Home
                    </NavLink>

                    {/* about */}
                    <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                        ? "text-purple-500 block p-3 text-lg navlink"
                        : "block p-3 text-lg navlink"
                    }
                    >
                    About
                    </NavLink>

                    {/* property */}
                    <NavLink
                    to="/property"
                    className={({ isActive }) =>
                        isActive
                        ? "text-purple-500 block p-3 text-lg navlink"
                        : "block p-3 text-lg navlink"
                    }
                    >
                    Property
                    </NavLink>

                    {/* agent */}
                    <NavLink
                    to="/agentDashboard"
                    className={({ isActive }) =>
                        isActive
                        ? "text-purple-500 block p-3 text-lg navlink"
                        : "block p-3 text-lg navlink"
                    }
                    >
                    Agent
                    </NavLink>

                    {/* contact */}
                    <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive
                        ? "text-purple-500 block p-3 text-lg navlink"
                        : "block p-3 text-lg navlink"
                    }
                    >
                    Contact
                    </NavLink>
                    
                    {/* get started */}
                    <button className="">
                    {!user ? ( 
                        <NavLink to="/login">Get Started</NavLink>
                    ) : (
                        <NavLink to="/agentDashboard">{user.username}</NavLink>
                    )} 
                    </button>
                    {user ? ( 
                        <div className="block p-3 text-lg navlink" >
                        <a  onClick={handleLogout}>Log Out</a>
                    </div> 
                    ) : null}
                </nav>
                </div>
        
                {/* Hamburger menu */}
                <div
                className="block lg:hidden mr-0 p-2 rounded-2xl hover:bg-purple-700 duration-300"
                >
                {nav ? (
                    <AiOutlineClose size={30} className="" />
                ) : ( 
                    <AiOutlineMenu size={30} className="" />
                )} 
                </div>
        
                {/* Mobile Menu */}
                <div
                className={
                    nav
                    ? "w-full left-0 flex justify-center text-center bg-zinc-900 top-[80px] absolute z-10"
                    : "absolute left-[-100%]"
                }
                >
                <nav className="pb-8">
                    <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                        ? "text-purple-500 block p-3 text-lg navlink"
                        : "block p-3 text-lg navlink"
                    }
                    >
                    Home
                    </NavLink>
                    <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                        ? "text-purple-500 block p-3 text-lg navlink"
                        : "block p-3 text-lg navlink"
                    }
                    >
                    About
                    </NavLink>
                    <NavLink
                    to="/property"
                    className={({ isActive }) =>
                        isActive
                        ? "text-purple-500 block p-3 text-lg navlink"
                        : "block p-3 text-lg navlink"
                    }
                    >
                    Property
                    </NavLink>
                    <NavLink
                    to="/agent"
                    className={({ isActive }) =>
                        isActive
                        ? "text-purple-500 block p-3 text-lg navlink"
                        : "block p-3 text-lg navlink"
                    }
                    >
                    Agent
                    </NavLink>
                    <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive
                        ? "text-purple-500 block p-3 text-lg navlink"
                        : "block p-3 text-lg navlink"
                    }
                    >
                    Contact
                    </NavLink>
                    
        
                    <button className="block m-4 ">
                    <NavLink className="" to="/UserForm">
                        Get Started
                    </NavLink>
                    </button>
                </nav>
                </div>
            </div>
            </div>
        );
}

export default Header;