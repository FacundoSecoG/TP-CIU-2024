import React from 'react'

const CardCafe = ({ cafe }) => {
    return (
        <>
            <h1>{cafe.title}</h1>
            <p>{cafe.description}</p>
            <p>{cafe.ingredients}</p>
            <img src={cafe.image} alt="coffe image" />
            <p className='mb-20'>{cafe.id}</p>
        </>
    )
}

export default CardCafe