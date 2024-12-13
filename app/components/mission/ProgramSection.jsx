import React from 'react'

export function ProgramsSection() {
  return (
    <section className="container px-4 py-12 grid md:grid-cols-2 gap-8">
      <div className="bg-green-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Degrees & Certifications</h2>
        <div className="space-y-4">
          <div className="bg-green-600 text-white p-4 rounded">Bachelor's</div>
          <div className="bg-green-500 text-white p-4 rounded">Master's</div>
          <div className="bg-green-400 text-white p-4 rounded">Doctoral</div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-6">Majors, minors & graduate programs</h2>
        <div className="grid gap-4">
          <div className="border rounded-lg p-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-4">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            <div>
              <h3 className="font-semibold">Computer Science</h3>
              <p className="text-sm text-gray-600">Learn programming and software development</p>
            </div>
          </div>
          <div className="border rounded-lg p-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-4">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <div>
              <h3 className="font-semibold">Management Business</h3>
              <p className="text-sm text-gray-600">Develop business and leadership skills</p>
            </div>
          </div>
          <div className="border rounded-lg p-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-4">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
            <div>
              <h3 className="font-semibold">Engineering</h3>
              <p className="text-sm text-gray-600">Solve complex technical challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

