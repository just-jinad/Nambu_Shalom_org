import React from 'react'

export function CTASection() {
  return (
    <section className="relative h-[400px] w-full">
      <img
        src="/placeholder.svg"
        alt="Student studying"
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nothing Beats Good Education For The Betterment Of A Student's Future
        </h2>
        <p className="mb-6 max-w-2xl">
          Join our community of learners and discover the path to your successful future
        </p>
        <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold">
          Read More
        </button>
      </div>
    </section>
  )
}

