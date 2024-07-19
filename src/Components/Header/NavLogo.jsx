import React from 'react'
import { Link } from 'react-router-dom'

const NavLogo = () => {
    return (
        <div className='relative -top-2 left-2'>
            <Link to='/'>
                <img alt="logo" loading="lazy" width="189" height="62" decoding="async" data-nimg="1" className="middle sm:block hidden w-[70px] m-auto" style={{ color: 'transparent' }} srcSet="/logo.png" />
            </Link>
        </div>
    )
}

export default NavLogo