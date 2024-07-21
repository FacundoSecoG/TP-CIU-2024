import React, { useContext } from 'react'
import CardCafe from '../MenuItem/CardCafe'
import { AppContext } from '../../Context/AppContext'

const MenuContent = () => {
    const { cafes } = useContext(AppContext)

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
                <ul className='mt-3'>
                    
                </ul>
                <h3 className='2xl:text-2xl lg:text-lg text-base font-semibold tracking-tight text-white'>TOTAL: ${}</h3>
            </div>
        </div>
    )
}

export default MenuContent