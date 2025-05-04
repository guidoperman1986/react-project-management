import React, { useState } from 'react';
import noProjectsImage from '../assets/no-projects.png';

export const Project = () => {
  return (
    <>

      <div className="w-3/4 flex items-center justify-center text-gray-brown">
        <div className='flex flex-col items-center justify-between h-325'>
          <img className='w-40' src={noProjectsImage} alt="" srcset="" />
          <div className='text-2xl'>No Projects Selected</div>

          <p className='select-project'>Select a project or get started with a new one</p>

          <button className='bg-gray-600 text-slate-200 w-40 mt-4 py-2 rounded'>Create new project</button>

        </div>

      </div>

    </>
  )
}
