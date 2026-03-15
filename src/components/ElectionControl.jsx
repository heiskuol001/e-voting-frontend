import React from 'react'

const ElectionControl = () => {
  return (
    <div className='flex flex-col items-center justify-start h-24 bg-gray-100 w-full border'>
          <div className='w-full ml-5 items-center justify-start flex'>
                <h1 className='text-left font-semibold'>Election Control</h1>
          </div>
          <div className='mt-2 flex flex-row justify-around items-center w-full border-t h-24'>
                <button className='bg-blue-800 px-4 py-1 rounded text-white'>Start Election</button>
                <button className='bg-red-800 px-4 py-1 rounded ml-2 text-white'>End Election</button>
          </div>
    </div>
  )
}

export default ElectionControl
