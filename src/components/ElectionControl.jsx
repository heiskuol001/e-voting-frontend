import React from 'react'

const ElectionControl = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between p-6 bg-white dark:bg-slate-900 w-full border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm gap-6'>
          <div className='flex flex-col'>
                <h1 className='text-xl font-bold text-slate-800 dark:text-slate-100'>Election Control</h1>
                <p className='text-sm text-slate-500 dark:text-slate-400 mt-1'>Manage the active election state.</p>
          </div>
          <div className='flex flex-row gap-3 w-full md:w-auto'>
                <button className='flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 active:scale-95'>
                    Start Election
                </button>
                <button className='flex-1 md:flex-none bg-red-50 hover:bg-red-600 text-red-600 hover:text-white dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white px-6 py-2.5 rounded-xl font-medium shadow-sm transition-all duration-300 active:scale-95 border border-red-100 dark:border-red-900/30 hover:border-transparent'>
                    End Election
                </button>
          </div>
    </div>
  )
}

export default ElectionControl
