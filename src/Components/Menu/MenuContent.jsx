import React, { useContext } from 'react'
import CardCafe from '../MenuItem/CardCafe'
import { AppContext } from '../../Context/AppContext'

const MenuContent = () => {
  const { cafes } = useContext(AppContext)
    return (
        <div className='py-12'>
            <ul className=''>
                {cafes.map(cafe => 
                    <div key={cafe.id} className='max-w-[70vw] m-auto h-auto w-[400px] '>
                        <CardCafe cafe={cafe} />
                    </div>
                )}
            </ul>
        </div>
    )
}

export default MenuContent