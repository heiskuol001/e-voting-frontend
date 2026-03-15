import React from 'react'
import NavBar from '../components/NavBar'
import VoteComponent from '../components/VoteComponent'
import ElectionControl from '../components/ElectionControl'
import CandidateComponent from '../components/CandidateComponent'

const DashBoard = () => {
  return (
    <div className='h-screen w-full md:w-[85%] flex flex-col items-center justify-start '>
                 <div className='w-full m-2'>
                <NavBar />
            </div>
            <div className=' vote-components-container flex flex-wrap items-center justify-center w-full gap-4 p-4 md:grid md:grid-cols-3'    >
                <VoteComponent />
                <VoteComponent />
                <VoteComponent />
            </div>
            <div className='w-full m-2'>
                 <ElectionControl />   
            </div>
            <div className='candidates-control-container flex flex-col items-center justify-start h-24 bg-gray-100 w-full border '>
                    <div className='w-full ml-5'>
                         <h1 className='text-left font-semibold'>Candidates Control</h1>
                </div>
                <div className='mt-2 flex flex-col justify-center items-start w-full gap-2'>
                    <CandidateComponent />
                </div>
                </div>
           </div>
  )
}

export default DashBoard
