import React from 'react'
import GalleryContent from './GalleryContent'

const GalleryContainer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <GalleryContent />
    </div>
  )
}

export default GalleryContainer