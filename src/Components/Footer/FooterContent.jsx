import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const FooterContent = () => {
    const location = useLocation();
    return (
        <>
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link to={"/"} className="flex items-center justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="/logo.png" alt="Tuki Logo" className='sm:w-[100px] w-[80px]' />
                </Link>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <Link to={"/"} className={`hover:underline hover:text-teal-800 me-4 md:me-6 ${location.pathname === "/" ? "font-bold text-teal-800" : "text-white"}`}>Inicio</Link>
                    </li>
                    <li>
                        <Link to={"/Menú"} className={`hover:underline hover:text-teal-800 me-4 md:me-6 ${location.pathname === "/menu" ? "font-bold text-teal-800" : "text-white"}`}>Menú</Link>
                    </li>
                    <li>
                        <Link to={"/contacto"} className={`hover:underline hover:text-teal-800 me-4 md:me-6 ${location.pathname === "/contacto" ? "font-bold text-teal-800" : "text-white"}`}>Contacto</Link>
                    </li>
                    <li>
                        <Link to={"/sobrenosotros"} className={`hover:underline hover:text-teal-800 me-4 md:me-6 ${location.pathname === "/sobrenosotros" ? "font-bold text-teal-800" : "text-white"}`}>Sobre nosotros</Link>
                    </li>
                    <li>
                        <Link to={"/galeria"} className={`hover:underline hover:text-teal-800 ${location.pathname === "/galeria" ? "font-bold text-teal-800" : "text-white"}`}>Galeria</Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-teal-800 bw sm:mx-[40px] lg:my-8" />
            <span className="block text-sm sm:text-center text-center text-white">
                © 2024 <span className='text-teal-800 underline'>NoSeCentrarUnDiv</span>. Aplicacion web con findes educativos.
            </span>
            <span className="block text-sm sm:text-center text-center text-white">
                Desarrollado por: Facundo Nicolas Seco Gaitan, Valentin Adriel Varela y Thiago Garcia.
            </span>
        </>
    )
}

export default FooterContent