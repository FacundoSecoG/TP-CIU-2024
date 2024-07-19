import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';

const NavList = () => {
    const [selectedItem, setSelectedItem] = useState("Inicio");
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navList = [
        {
            nombre: 'Inicio',
            route:'/'
        },
        {
            nombre: 'Menú',
            route:'/menu'
        },
        {
            nombre: 'Contacto',
            route:'/contacto'
        },
        {
            nombre: 'Sobre Nosotros',
            route:'/sobrenosotros'
        },
        {
            nombre: 'Galeria',
            route: '/galeria'
        }
    ];

    return (
        <nav className="relative top-1 right-6">
            <div className="hidden lg:block">
                <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                    {navList.map((item, index) => (
                        <Link to={item.route} key={index}>
                            <li
                                onClick={() => setSelectedItem(item.nombre)}
                                className={`font-semibold px-4 text-white rounded-lg transition duration-300 hover:bg-teal-800/75 hover:shadow-black/30 hover:shadow-lg hover:backdrop-blur-[.2rem] ${location.pathname === item.route ? 'bg-teal-800/75 text-main shadow-black/30 font-bold drop-shadow-md backdrop-blur-[4rem] shadow-lg' : 'glob false tracking-widest md:text-[16px] hover:text-main/90'} flex gap-3 items-center py-2 px-3`}
                            >
                                {item.nombre}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>

            <button
                className="relative ml-auto h-12 max-h-[40px] w-4 max-w-[40px] select-none rounded-lg text-center align-middle font-sans font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                type="button"
                onClick={toggleMenu}
            >
                <span className="absolute transform -translate-x-1/2 -translate-y-1/4 top-4 left-1/2 pb-4">
                    {menuOpen ? (
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            className="h-8 w-8 text-white text-xl inline-block"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{marginBottom:"20px"}}
                        >
                            <IoClose />
                        </svg>
                    ) : (
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            className="h-8 w-8 text-white text-xl inline-block"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                        </svg>
                    )}
                </span>
                {menuOpen && (
                    <ul className="absolute top-20 -right-3 py-8 px-4 z-40 duration-500 text- transition backdrop-blur-[20px] bg-black/30 rounded-lg">
                        {navList.map((item, index) => (
                            <Link to={item.route} key={index}>
                                <li
                                    style={{margin: '24px 0'}}
                                    onClick={() => setSelectedItem(item.nombre)}
                                    className={`font-bold py-8 rounded-lg transition text-center text-white duration-300 font-xl hover:bg-teal-800/75 hover:shadow-black/30 hover:shadow-lg hover:backdrop-blur-[.2rem] ${location.pathname === item.route ? 'text-main shadow-black/50 font-bold hover:backdrop-blur-[.2rem] hover:shadow-sm drop-shadow-md backdrop-blur-[4rem] shadow-lg bg-teal-800/75' : 'bg-black/50 glob false tracking-widest md:text-[16px] hover:text-main/90'} flex gap-3 items-center py-2 px-8`}
                                >
                                    {item.nombre}
                                </li>
                            </Link>
                        ))}
                    </ul>
                )}
            </button>
        </nav>
    );
};

export default NavList;