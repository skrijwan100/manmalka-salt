import React from 'react'
import vedio from "../assets/Vedio.mp4"
export default function Vediotext() {
  return (

      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover  md:block"
          playsInline
          muted
          autoPlay
          loop
        >
          <source src={vedio} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-linear-to-r from-yellow-400 via-[#e6f91a] to-[#9ba210] text-transparent bg-clip-text  animate-fade-in-up" style={{ fontFamily: "Bebas Neue" }}>
            Harvested by Nature,<br /> Perfected by Us  <br />
          </h1>

          {/* <p className="text-xl md:text-3xl text-yellow-500 font-bold mb-8 bg-[#0733d0c4] inline-block px-4 py-2 rounded-xl">
            Delivering high-purity salt through advanced industrial processes.
          </p> */}
          <br />

        </div>
      </section>

  )
}
