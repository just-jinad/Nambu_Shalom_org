import React from 'react'

export function StudentCards() {
  return (
    <section className="container px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">
        Developing caring learners who are actively growing and achieving
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Student excellence</h3>
          <p className="text-gray-600 mb-4">
            Supporting student success through comprehensive programs and resources
          </p>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">Learn more</button>
        </div>
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Access the guides</h3>
          <p className="text-gray-600 mb-4">
            Find resources and information to help you succeed in your academic journey
          </p>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">View guides</button>
        </div>
      </div>
    </section>
  )
}

