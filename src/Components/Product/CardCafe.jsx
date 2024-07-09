import React from 'react'

const CardCafe = ({ cafe }) => {
    return (
        <>
            <h1 className=''>{cafe.title}</h1>
            <img src={cafe.image} alt={`foto de ${cafe.title}`} className='' />
        </>
    )
}

export default CardCafe