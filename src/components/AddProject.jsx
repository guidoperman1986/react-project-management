import React from 'react'

export const AddProject = ({onAddNewProject}) => {
  return (
    <div className="w-3/4 flex items-center justify-center">
      <div className="flex flex-col w-3/4 h-2/4 justify-evenly">

        <div className='ml-auto flex gap-4'>
          <button onClick={onAddNewProject}>Cancel</button>
          <button className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'>Save</button>
        </div>

        <div>
          <p className='text-grayish-brown font-bold'>Title</p>
          <input type="text" className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600' />
        </div>

        <div>
          <p className='text-grayish-brown font-bold'>Description</p>
          <textarea name="" id="" className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'></textarea>
        </div>

        <div>
          <p className='text-grayish-brown font-bold'>Date</p>
          <input type="date" className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600' />
        </div>
      </div>



    </div>
  )
}
