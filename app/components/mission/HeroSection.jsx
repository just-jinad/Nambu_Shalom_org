import React from 'react'

export function HeroSection() {
  return (
    <section className="relative h-[400px] w-full">
      <img
        src="https://i.pinimg.com/736x/eb/d8/9e/ebd89efec686d1dc67c18a99c48dbc80.jpg"
        alt="Students in classroom"
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Academics</h1>
      </div>
    </section>
  )
}

