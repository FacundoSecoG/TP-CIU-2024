import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'

const CardCafe = ({ cafe }) => {
    const { agregarAlCarrito } = useContext(AppContext)
    const handleAddToCart = () => {
        agregarAlCarrito(cafe);
    }

    return (
        <div className="my-5 w-full max-w-sm min-h-[200px] rounded-lg bg-slate-600 shadow-xl">
            <div className="p-5">
                <h5 className="2xl:text-4xl lg:text-2xl text-xl text h-[80px] font-semibold tracking-tight text-white">{cafe.nombre}</h5>
                <h6 className="pt-3 font-normal text-gray-400 h-[100px] mb-5">{cafe.descripcion}</h6>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">${cafe.precio}</span>
                    <a className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-teal-700 hover:bg-teal-800 shadow-xl focus:ring-teal-800" 
                    onClick={handleAddToCart}>
                        Agregar al carrito
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardCafe