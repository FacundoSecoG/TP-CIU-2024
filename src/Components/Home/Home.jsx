import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'

const Home = () => {
    const { cafes } = useContext(AppContext)
    return (
        <div className='py-12'>
            <ul className=''>
                {cafes.map(cafe => 
                    <div key={cafe.id} className='max-w-[70vw] m-auto h-auto w-[400px] '>
                        
                    </div>
                )}
            </ul>
        </div>
    )
}

export default Home