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
        <div className="my-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="pb-3 rounded-t-lg" src="https://picsum.photos/400" alt="product image" /> {/*PLACEHOLDER*/}
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{cafe.nombre}</h5>
                </a>
                <h6 className="mb-3 font-normal text-gray-700 dark:text-gray-400">{cafe.descripcion}</h6>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${cafe.precio}</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar al carrito</a>
                </div>
            </div>
        </div>
    )
}

export default CardCafe