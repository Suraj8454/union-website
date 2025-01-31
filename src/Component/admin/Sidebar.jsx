
import control from './SideBarIcon/control.png'
import picture from './SideBarIcon/Picture1.jpg'


import { useContext, useState, useRef, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom'
import { AdminAuthContext } from '../context/AdminAuth'
import { ChevronDown, ChevronUp, HomeIcon, House, LogOut, User, UserX, Airplay, ArrowRight, ChevronRight } from 'lucide-react'

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const { logout } = useContext(AdminAuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMember, setIsOpenMember] = useState(false);
    // const buttonRef = useRef(null);
    // const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdownMember = () => {
        setIsOpenMember(!isOpenMember);
    };

    // const closeDropdown = (event) => {
    //     if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
    //         setIsOpen(false);
    //     }
    // };


    // useEffect(() => {
    //      document.addEventListener('mousedown', closeDropdown)
    //     return () => {
    //         document.removeEventListener('mousedown', closeDropdown);
    //     };
   
    // }, []);



    return (
        <div className="flex" >
            <div
                className={` ${open ? "w-64" : "w-20 "
                    } h-screen p-5  pt-6 relative duration-300 bg-sky-950 `}
            >
                <img
                    src={control}
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
                    border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex items-center gap-x-4">
                    <img
                        src={picture}
                        className={`cursor-pointer duration-500 w-9 h-9 rounded-full  ${open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Dashdboard
                    </h1>
                </div>
                <ul className="pt-6">
                    <NavLink to={'/backend/dashboard'}>
                        <li
                            className="flex items-center p-2 mt-1 text-sm text-white rounded-md cursor-pointer hover:bg-light-white gap-x-2 hover:bg-sky-700"
                        >
                            <House size={20} />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Home
                            </span>
                        </li>
                    </NavLink>



                    <li
                        className="flex items-center p-2 mt-2 text-sm text-white rounded-md cursor-pointer hover:bg-light-white gap-x-2 "
                    >


                        <div className="relative inline-block ">
                            {/* Button */}
                            <button
                                // ref={buttonRef}
                                onClick={toggleDropdown}
                                className="flex text-white rounded-md focus:outline-none gap-x-2 "
                            >
                                < Airplay size={20} />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Website changes
                                </span>
                                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>

                            {/* Dropdown menu */}
                            {isOpen && (
                                <div
                                    // ref={dropdownRef}
                                    className="flex flex-col w-48 mt-2 rounded-md bg-sky-950 "
                                >
                                    <ul className="py-1">
                                        <Link to='/backend/websitechanges/current'><li className="flex items-center px-4 py-1 text-white cursor-pointer hover:bg-sky-700 gap-x-2 hover:rounded-lg"> <ChevronRight size={15} />Current Bearers</li></Link>
                                        <Link to='/backend/websitechanges/previousBearers'> <li className="flex items-center px-4 py-1 text-white cursor-pointer hover:bg-sky-700 gap-x-2 hover:rounded-lg" ><ChevronRight size={15} /> Previous Bearers</li></Link>
                                        <Link to='/backend/websitechanges/hindirule'> <li className="flex items-center px-4 py-1 text-white cursor-pointer hover:bg-sky-700 gap-x-2 hover:rounded-lg"><ChevronRight size={15} /> Hindi Rules</li></Link>
                                        <Link to='/backend/websitechanges/englishrule'><li className="flex items-center px-4 py-1 text-white cursor-pointer hover:bg-sky-700 gap-x-2 hover:rounded-lg"><ChevronRight size={15} />English Rules</li></Link>
                                        <Link to='/backend/websitechanges/facilities'> <li className="flex items-center px-4 py-1 text-white cursor-pointer hover:bg-sky-700 gap-x-2 hover:rounded-lg"><ChevronRight size={15} />M . F</li></Link>
                                        <Link to='/backend/websitechanges/medical'><li className="flex items-center px-4 py-1 text-white cursor-pointer hover:bg-sky-700 gap-x-2 hover:rounded-lg"><ChevronRight size={15} />Medical</li></Link>
                                        <Link to='/backend/websitechanges/retirement'> <li className="flex items-center px-4 py-1 text-white cursor-pointer hover:bg-sky-700 gap-x-2 hover:rounded-lg"><ChevronRight size={15} />Retirement</li></Link>
                                        <Link to='/backend/websitechanges/death'><li className="flex items-center px-4 py-1 text-white cursor-pointer hover:bg-sky-700 gap-x-2 hover:rounded-lg"><ChevronRight size={15} />Death compensation</li></Link>
                                    </ul>
                                </div>
                            )}
                        </div>

                    </li>



                    <li
                        className="flex items-center p-2 mt-2 text-sm text-white rounded-md cursor-pointer hover:bg-light-white gap-x-2 "
                    >


                        <div className="relative inline-block ">
                            {/* Button */}
                            <button
                                onClick={toggleDropdownMember}
                                className="flex text-white rounded-md focus:outline-none gap-x-2 "
                            >
                                < Airplay size={20} />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Union Member
                                </span>
                                {isOpenMember ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>

                            {/* Dropdown menu */}
                            {isOpenMember && (
                                <div
                                    className="flex flex-col w-48 mt-2 rounded-md bg-sky-950 "
                                >
                                    <ul className="py-1">
                                        <Link to='#'><li className="flex items-center px-4 py-1 text-white cursor-pointer hover:bg-sky-700 gap-x-2 hover:rounded-lg"> <ChevronRight size={15} />Data</li></Link>
                                        <Link to='#'> <li className="flex items-center px-4 py-1 text-white cursor-pointer hover:bg-sky-700 gap-x-2 hover:rounded-lg" ><ChevronRight size={15} /> Invoice</li></Link>
                                        <Link to='#'> <li className="flex items-center px-4 py-1 text-white cursor-pointer hover:bg-sky-700 gap-x-2 hover:rounded-lg"><ChevronRight size={15} />Fetch</li></Link>
                                    </ul>
                                </div>
                            )}
                        </div>

                    </li>






                    <li
                        className="flex items-center p-2 mt-2 text-sm text-white rounded-md cursor-pointer hover:bg-light-white gap-x-2 hover:bg-sky-700" onClick={logout}
                    >
                        <LogOut size={20} />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Logout
                        </span>

                    </li>



                </ul>
            </div>
        </div>
    );
};
export default Sidebar;


