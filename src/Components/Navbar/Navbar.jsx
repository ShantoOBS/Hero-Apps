import React from 'react'
import { Link, Links } from 'react-router'
import { IoLogoGithub } from "react-icons/io";

import { RxHamburgerMenu } from "react-icons/rx";
import icon from '../../assets/logo.png'

import { IoHomeOutline } from "react-icons/io5";

import { NavLink } from "react-router-dom";

export default function Navbar() {


    return (
        <div className="shadow-sm">

            <div className='max-w-6xl mx-auto navbar'>


                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <RxHamburgerMenu />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-b-box z-1 mt-3 w-100 p-2 shadow bg-white">

                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-green-500 font-bold border-b-2 border-green-500"
                                        : "text-gray-600"
                                }
                            >
                                Home
                            </NavLink>


                            <Link>Apps</Link>
                            <Link>Installation</Link>

                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2"
                    >
                        <img src={icon} alt="Hero Logo" className="w-8 h-8" />
                        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-bold">
                            HERO.IO
                        </span>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4 font-bold">

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-[#9F62F2] border-b-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text "
                                    : "text-gray-600"
                            }
                        >

                            <div className='flex gap-2 items-center justify-center '>
                                <IoHomeOutline />  Home
                            </div>

                        </NavLink>

                        <NavLink
                            to="/App"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-[#9F62F2] border-b-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text "
                                    : "text-gray-600"
                            }
                        >
                            Apps
                        </NavLink>


                        <NavLink
                            to="/Installation"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-[#9F62F2] border-b-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text "
                                    : "text-gray-600"
                            }
                        >
                            Installation
                        </NavLink>


                    </ul>
                </div>
                <div className="navbar-end ">

                    <Link to="https://github.com/ShantoOBS" target="_blank" className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-2 rounded-md font-semibold text-white flex items-center gap-1 justify-center'><IoLogoGithub /> Contribute</Link>

                </div>


            </div>


        </div>
    )
}
