import React from 'react'
import FullScreenSlider from '../components/Slider'
import TestimonialCarousel from '../components/ProductTestimoial'
import Vediotext from '../components/Vediotext'
import ManmalkaSalt from '../components/Aboutext'
import TechnicalPartner from '../components/Tp'

export default function Home() {
  return (
    <div>
      {/* <FullScreenSlider/> */}
      <Vediotext/>
      <ManmalkaSalt/>
      <div>
        <TestimonialCarousel/>
      </div>
      <TechnicalPartner/>
    </div>
  )
}
