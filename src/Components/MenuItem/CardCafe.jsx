import React from 'react'

// const CardCafe = ({ cafe }) => {
//     return (
//         <div classNameName=''>
//             <h1 className=''>{cafe.nombre}</h1>
//             <p>{cafe.descripcion}</p>
//             <p>{cafe.precio}</p>
//         </div>
//     )
// }

const CardCafe = ({ cafe }) => {
    return (
        <div className="my-5 w-full max-w-sm min-h-[200px] rounded-lg bg-slate-600 shadow-xl">
            <div className="p-5">
                <a href="#"> {/*AL PEDO QUE SEA ETIQUETA A? */}
                    <h5 className="text-3xl font-semibold tracking-tight text-white">{cafe.nombre}</h5>
                </a>
                <h6 className="mb-3 font-normal text-gray-400">{cafe.descripcion}</h6>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">${cafe.precio}</span>
                    <a href="#" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-teal-800 shadow-xl hover:bg-teal-900 focus:ring-teal-800">Agregar al carrito</a>
                </div>
            </div>
        </div>
    )
}

export default CardCafe