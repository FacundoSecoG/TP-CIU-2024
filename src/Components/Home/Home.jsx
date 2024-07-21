import React from 'react'

const Home = () => {
    return (
        <>
            <div className='mb-12'>
                <blockquote className='px-[20%] text-xl italic font-semibold text-center text-gray-900 dark:text-white'>
                    <h3 className='pb-5 text-5xl not-italic'>¡Bienvenidos al sitio (no) oficial de Nosara!</h3>
                    <p>En nuestro local de Bella Vista te esperan nuestros baristas capacitados para ofrecerte un café muy especial.</p> 
                    <p>El ambiente cálido y los detalles de nuestros productos elaborados artesanalmente hacen que la experiencia sea única e inigualable.</p>
                </blockquote>
            </div>

            <div className='my-16 w-[50vw] m-auto bg-slate-400 bg-slate-600 rounded-xl text-white p-6'>
                <iframe className='w-full aspect-[16/9]' src={`https://www.youtube.com/embed/FIHoLqg5lqM?playsinline=1&iv_load_policy=3&rel=0&showinfo=0&controls=0&fs=0&start=0&autoplay=1&enablejsapi=0&widgetid=1`}
                    title="Coffee Bean" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </div>

            <div id='opcion1?' className='mx-5 grid sm:gap-6 sm:grid-cols-3'>
                
                <a href="https://youtu.be/aTC_RNYtEb0" target='_blanket' className="flex flex-col mb-10 sm:mb-0 items-center rounded-lg shadow 2xl:flex-row md:max-w-2xl border-teal-700 bg-teal-900 hover:bg-teal-800">
                    <img className="object-cover w-full rounded-t-lg h-66 2xl:h-auto 2xl:w-48 2xl:rounded-none 2xl:rounded-s-lg" src="https://lh5.googleusercontent.com/p/AF1QipPnTZLo8twcW-PtqVhZQqG7GR3EMEjtxC1-sQYP=s677-k-no" alt="foto exterior nosara"></img>
                    <div className="flex flex-col h-full justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Arquitectura vintage</h5>
                        <p className="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magnam ipsa vitae dolor eum nisi quisquam, maiores dolores totam, eius molestiae perspiciatis doloremque laborum reprehenderit, saepe odit in? Cum, ex!.</p>
                    </div>
                </a>

                <a href="https://youtu.be/4xoseQmYLLw" target='_blank' className="flex flex-col mb-10 sm:mb-0 items-center rounded-lg shadow 2xl:flex-row md:max-w-2xl border-teal-700 bg-teal-900 hover:bg-teal-800">
                    <img className="object-cover w-full rounded-t-lg h-66 2xl:h-auto 2xl:w-48 2xl:rounded-none 2xl:rounded-s-lg" src="https://lh5.googleusercontent.com/p/AF1QipMqwaokh1wTs_jpc1U2PUxFcH37eBqXCYMZ10Dv=s508-k-no" alt="foto dentro nosara"></img>
                    <div className="flex flex-col h-full justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Interior reconfortante</h5>
                        <p className="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magnam ipsa vitae dolor eum nisi quisquam, maiores dolores totam, eius molestiae perspiciatis doloremque laborum reprehenderit, saepe odit in? Cum, ex!.</p>
                    </div>
                </a>

                <a href="https://youtu.be/WjOcoRozozc" target='_blank' className="flex flex-col mb-10 sm:mb-0 items-center rounded-lg shadow 2xl:flex-row md:max-w-2xl border-teal-700 bg-teal-900 hover:bg-teal-800">
                    <img className="object-cover w-full h-full rounded-t-lg h-66 2xl:h-auto 2xl:w-48 2xl:rounded-none 2xl:rounded-s-lg" src="https://lh5.googleusercontent.com/p/AF1QipPi5SZ02TxBHmhRIa0xi0Zytk0ihwTsM_khDw-i=s677-k-no" alt="foto cafe de nosara"></img>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cafe de especialidad</h5>
                        <p className="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magnam ipsa vitae dolor eum nisi quisquam, maiores dolores totam, eius molestiae perspiciatis doloremque laborum reprehenderit, saepe odit in? Cum, ex!.</p>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Home