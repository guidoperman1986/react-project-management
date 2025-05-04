import React from 'react'

export const Sidebar = () => {
  return (
    <>
      <div className="w-1/4 bg-black mt-20 rounded-tr-xl">
        <div className='mt-20 ml-10 mr-10 flex flex-col'>
          <span className='text-white text-4xl'>Your projects</span>

          <div className='mt-5'>
            <button className='bg-gray-600 text-slate-200 w-40 mt-4 py-2 rounded'>+ Add Project</button>

          </div>
        </div>
      </div>
    </>
  )
}
