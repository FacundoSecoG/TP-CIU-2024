import React from 'react'

const ContactContent = () => {
  return (
    <div className='bg-slate-600 rounded-xl text-white p-6'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.5049007132293!2d-58.69011032327294!3d-34.566088955513735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd0b42648999%3A0x177928d654d50aa7!2sNOSARA!5e0!3m2!1ses!2sar!4v1721504162544!5m2!1ses!2sar" className='w-full h-[450px] mb-10' loading="lazy"></iframe>
      <div className='mt-4'>
        <h2 className='lg:text-2xl text-lg font-semibold mb-2'>Donde encontrarnos?</h2>
        <p className='text-base lg:pl-5 pl-2'>Dirección: Moine 1897, Bella Vista, San Miguel.</p>
      </div>
      <div className='mt-4'>
        <h2 className='lg:text-2xl text-lg font-semibold mb-2'>Siguenos en redes:</h2>
        <p className='text-base lg:pl-5 pl-2 underline text-blue-500'><a href="https://www.instagram.com/nosara.indie/" target='_blanket'># Instagram</a></p>
      </div>
      <div className='mt-4'>
        <h2 className='lg:text-2xl text-lg font-semibold mb-2'>Nuestros horarios:</h2>
        <p className='text-base lg:pl-5 pl-2'>Apertura - Lunes a Viernes 7:00. Sábados y Domingos 8:00</p>
      </div>
    </div>
  )
}

export default ContactContent