import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'

const Home = () => {
    return (
        <>
         {/* FIJATE SI TE GUSTA MÁS EN FORMATO CARTA O TIRAMOS LAS FOTOS DE OTRA FORMA */}
            <div id='opcion1?' className='pt-20 mx-5 grid grid-cols-3'>
                
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://lh5.googleusercontent.com/p/AF1QipPnTZLo8twcW-PtqVhZQqG7GR3EMEjtxC1-sQYP=s677-k-no" alt=""></img>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Foto Frente</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magnam ipsa vitae dolor eum nisi quisquam, maiores dolores totam, eius molestiae perspiciatis doloremque laborum reprehenderit, saepe odit in? Cum, ex!.</p>
                    </div>
                </a>

                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://lh5.googleusercontent.com/p/AF1QipMqwaokh1wTs_jpc1U2PUxFcH37eBqXCYMZ10Dv=s508-k-no" alt=""></img>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Foto dentro</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magnam ipsa vitae dolor eum nisi quisquam, maiores dolores totam, eius molestiae perspiciatis doloremque laborum reprehenderit, saepe odit in? Cum, ex!.</p>
                    </div>
                </a>

                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://lh5.googleusercontent.com/p/AF1QipPi5SZ02TxBHmhRIa0xi0Zytk0ihwTsM_khDw-i=s677-k-no" alt=""></img>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Foto de cafesuli con logo de Nosara en el fondo</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magnam ipsa vitae dolor eum nisi quisquam, maiores dolores totam, eius molestiae perspiciatis doloremque laborum reprehenderit, saepe odit in? Cum, ex!.</p>
                    </div>
                </a>
            </div>

            <div id='opcion2?' className='mt-5 mx-10'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://lh5.googleusercontent.com/p/AF1QipPnTZLo8twcW-PtqVhZQqG7GR3EMEjtxC1-sQYP=s677-k-no" alt=""></img>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://lh5.googleusercontent.com/p/AF1QipMqwaokh1wTs_jpc1U2PUxFcH37eBqXCYMZ10Dv=s508-k-no" alt=""></img>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://lh5.googleusercontent.com/p/AF1QipPi5SZ02TxBHmhRIa0xi0Zytk0ihwTsM_khDw-i=s677-k-no" alt=""></img>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://lh5.googleusercontent.com/p/AF1QipMqwaokh1wTs_jpc1U2PUxFcH37eBqXCYMZ10Dv=s508-k-no" alt=""></img>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://lh5.googleusercontent.com/p/AF1QipPi5SZ02TxBHmhRIa0xi0Zytk0ihwTsM_khDw-i=s677-k-no" alt=""></img>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://lh5.googleusercontent.com/p/AF1QipPnTZLo8twcW-PtqVhZQqG7GR3EMEjtxC1-sQYP=s677-k-no" alt=""></img>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://lh5.googleusercontent.com/p/AF1QipPnTZLo8twcW-PtqVhZQqG7GR3EMEjtxC1-sQYP=s677-k-no" alt=""></img>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://lh5.googleusercontent.com/p/AF1QipMqwaokh1wTs_jpc1U2PUxFcH37eBqXCYMZ10Dv=s508-k-no" alt=""></img>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://lh5.googleusercontent.com/p/AF1QipPi5SZ02TxBHmhRIa0xi0Zytk0ihwTsM_khDw-i=s677-k-no" alt=""></img>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://lh5.googleusercontent.com/p/AF1QipPi5SZ02TxBHmhRIa0xi0Zytk0ihwTsM_khDw-i=s677-k-no" alt=""></img>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://lh5.googleusercontent.com/p/AF1QipPnTZLo8twcW-PtqVhZQqG7GR3EMEjtxC1-sQYP=s677-k-no" alt=""></img>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://lh5.googleusercontent.com/p/AF1QipMqwaokh1wTs_jpc1U2PUxFcH37eBqXCYMZ10Dv=s508-k-no" alt=""></img>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home