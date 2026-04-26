import React from 'react'

const VoteComponent = () => {
  return (
    <div className='flex flex-col items-center justify-center h-32 md:h-40 bg-white dark:bg-slate-900 w-full border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden group'>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <h1 className="font-bold text-lg text-slate-700 dark:text-slate-200 relative z-10">Vote Component</h1>
    </div>
  )
}

export default VoteComponent
