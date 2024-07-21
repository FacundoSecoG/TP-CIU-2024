import React, {useState, useEffect} from 'react'

const GalleryContent = () => {
  const [cafes, setCafe] = useState([])
  const API = 'https://api.sampleapis.com/coffee/hot'
  useEffect( () => {
    fetch(API).then(res => res.json()).then(data => setCafe(data))
  },[])
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cafes.map(cafe =>
          <div key={cafe.id} className=' rounded-lg bg-slate-600 shadow-xl'>
            <img className="h-auto max-w-full rounded-lg" src={cafe.image} alt={'Foto de ' + cafe.title} />
            <h5 className="py-2 text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cafe.title}</h5>
          </div>
        )}
      </div>
    </>
  )
}

export default GalleryContent