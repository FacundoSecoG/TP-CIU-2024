import React, { useContext } from 'react'
import CardCafe from '../MenuItem/CardCafe'
import { AppContext } from '../../Context/AppContext'

let crearFuncionOVariableAca = 0

const MenuContent = () => {
  const { cafes } = useContext(AppContext)
    return (
        <div className='py-20 grid grid-cols-3 gap-1'>
            <ul className='grid grid-cols-subgrid gap-1 col-span-2'>
                {cafes.map(cafe => 
                    <div key={cafe.id} className='max-w-[70vw] m-auto h-auto w-[400px] '>
                        <CardCafe cafe={cafe} />
                    </div>
                )}
            </ul>
            <div className='p-5 sticky top-[25%] mt-5 mr-20 col-start-3 max-w-[40vw] h-[500px] rounded-lg bg-slate-600 shadow-xl'>
                <h2 className='text-4xl font-semibold tracking-tight text-white'>CARRITO</h2>
                <ul className='mt-3'>
                    <li>xd</li> {/* CREAR EVENTO PARA AGREGAR AL CARRITO ACÁ*/}
                </ul>
                <h3 className='absolute bottom-5 left-5 text-2xl font-semibold tracking-tight text-white'>TOTAL: ${crearFuncionOVariableAca}</h3>
            </div>
        </div>
    )
}

export default MenuContent