import React, { useContext, useState } from 'react'
import CardCafe from '../Product/CardCafe'
import { AppContext } from '../../Context/AppContext'

const Home = () => {
    const { cafes } = useContext(AppContext)
    return (
        <div>
            <ul>
                {cafes.map(cafe => 
                    <div key={cafe.id}>
                        <CardCafe cafe={cafe} />
                    </div>
                )}
            </ul>
        </div>
    )
}

export default Home