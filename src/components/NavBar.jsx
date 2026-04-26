import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-800 dark:text-slate-100 w-full rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800'>
          <div>
              <h1 className='font-black text-xl tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>E-VOTING ADMIN</h1>
          </div>
          <div>
                <button className='bg-slate-900 hover:bg-slate-800 text-white dark:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 px-5 py-2.5 rounded-xl font-medium shadow-md active:scale-95'>
                    Dashboard
                </button>
          </div>
    </div>
  )
}

export default NavBar
