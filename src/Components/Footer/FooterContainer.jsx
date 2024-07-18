import React from 'react'
import FooterContent from '../Footer/FooterContent';

const FooterContainer = () => {
    return (
        <section className="flex flex-col w-[100vw] margin footer bottom-0 backdrop-blur-[2rem] bt rounded-lg border-teal-800 border-t-4">
            <div className="container mx-auto p-4 md:py-8">
                <FooterContent />
            </div>
        </section>
    )
}

export default FooterContainer