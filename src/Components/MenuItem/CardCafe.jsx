import React from 'react'

const CardCafe = ({ cafe }) => {
    return (
        <div className="my-5 w-full max-w-sm min-h-[200px] rounded-lg bg-slate-600 shadow-xl">
            <div className="p-5">
                <h5 className="2xl:text-4xl lg:text-2xl text-xl text h-[80px] font-semibold tracking-tight text-white">{cafe.nombre}</h5>
                <h6 className="font-normal text-gray-400 h-[50px] mb-5 overflow-hidden ...">{cafe.descripcion}..</h6>
                <ul className='flex'>
                    {cafe.ingredientes.map(ingrediente => {
                        return <li key={ingrediente} className='m-3 text-white max-h-[40px] bg-teal-700 hover:bg-teal-800 rounded-xl'>{ingrediente}</li>
                    })}
                </ul>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">${cafe.precio}</span>
                    <a href="#" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-teal-700 hover:bg-teal-800 shadow-xl focus:ring-teal-800">Agregar al carrito</a>
                </div>
            </div>
        </div>
    )
}

export default CardCafe