import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar-container flex items-center justify-between p-4 bg-blue-600 text-white w-full'>
          <div >
              <h1 className='font-extrabold'>E-VOTING ADMIN</h1>
          </div>
          <div>
                <button className='bg-blue-800 px-4 py-2 rounded'>Dashboard</button>
          </div>
    </div>
  )
}

export default NavBar
