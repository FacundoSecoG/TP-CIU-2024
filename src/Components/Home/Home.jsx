import React, { useContext, useState } from 'react'
import CardCafe from '../Product/CardCafe'
import { AppContext } from '../../Context/AppContext'

const Home = () => {
    const { cafes } = useContext(AppContext)
    return (
        <div className=''>
            <ul className=''>
                {cafes.map(cafe => 
                    <div key={cafe.id} className='max-w-[70vw] m-auto'>
                        <CardCafe cafe={cafe} />
                    </div>
                )}
            </ul>
        </div>
    )
}

export default Home