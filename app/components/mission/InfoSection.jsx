import React from 'react'

export function InfoSection() {
  return (
    <section className="container px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">We enter to learn, leave to achieve</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Find your career</h3>
          <p className="text-gray-600 mb-4">
            Discover opportunities that align with your interests and goals
          </p>
          <button className="border border-gray-300 px-4 py-2 rounded">Contact us</button>
        </div>
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Tuition & Funding</h3>
          <p className="text-gray-600 mb-4">
            Learn about tuition fees and financial aid options
          </p>
          <button className="border border-gray-300 px-4 py-2 rounded">Learn more</button>
        </div>
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Admissions</h3>
          <p className="text-gray-600 mb-4">
            Start your journey with us - apply today
          </p>
          <button className="border border-gray-300 px-4 py-2 rounded">Apply now</button>
        </div>
      </div>
    </section>
  )
}

