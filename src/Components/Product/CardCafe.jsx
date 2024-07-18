import React from 'react'

const CardCafe = ({ cafe }) => {
    return (
        <div className=''>
            <h1 className=''>{cafe.nombre}</h1>
            <p>{cafe.precio}</p>
        </div>
    )
}

export default CardCafe