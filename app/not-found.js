'use client'
import { useRouter } from 'next/navigation'
import './not-found.css'

const NotFound = () => {

  const router = useRouter()

  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-b from-gray-900 to-gray-950 flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-200">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">404</div>
            <p
              className="text-2xl md:text-3xl font-light leading-normal"
            >Sorry we couldn&apos;t find this page. </p>
            <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
            <div className="flex gap-2">
              <button className="px-4 cursor-pointer inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700" onClick={() => router.push('/')}>Back to Homepage</button>
              <button className="px-4 cursor-pointer inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-slate-600 active:bg-slate-600 hover:bg-slate-700" onClick={() => window.history.back()}>Go Back</button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound