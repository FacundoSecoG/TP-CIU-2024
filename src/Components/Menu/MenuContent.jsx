import React, { useContext } from 'react';
import CardCafe from '../MenuItem/CardCafe';
import { AppContext } from '../../Context/AppContext';
import { FaTrash } from 'react-icons/fa';

const MenuContent = () => {
    const { cafes, carrito, total, eliminarDelCarrito } = useContext(AppContext);
    const handleDeleteFromCart = (itemId) => {
        eliminarDelCarrito(itemId);
    };

    return (
        <div className='py-20'>
            <ul className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {cafes.map(cafe =>
                    <div key={cafe.id} className='min-w-[300px] max-w-[500px] mx-auto'>
                        <CardCafe cafe={cafe} />
                    </div>
                )}
            </ul>
            <div className='py-5 px-16 rounded-lg bg-slate-600 shadow-xl'>
                <h2 className='2xl:text-3xl lg:text-xl text-lg font-semibold tracking-tight text-white'>CARRITO</h2>
                <ul className='my-3 '>
                    {carrito.map((item) =>
                        <li key={item.nombre} className='flex justify-between items-center text-gray-400'>
                            * bebida: {item.nombre}. - cantidad {item.cantidad}.
                            <button onClick={() => handleDeleteFromCart(item.id)}><FaTrash size={20} /></button>
                        </li>
                    )}
                </ul>
                <h3 className='2xl:text-2xl lg:text-lg text-base font-semibold tracking-tight text-white'>TOTAL: ${total}</h3>
            </div>
        </div>
    );
};

export default MenuContent;