import React from 'react'
import NavBar from '../components/NavBar'
import VoteComponent from '../components/VoteComponent'
import ElectionControl from '../components/ElectionControl'
import CandidateComponent from '../components/CandidateComponent'
import FooterComponent from '../components/FooterComponent'

const HomePage = () => {
    return (
        <div className='home-page-container flex flex-col items-center justify-start h-screen bg-gray-100 w-full md:flex-row'>
            <div className='hidden md:flex md:flex-col  md:w-[15%] h-screen bg-gray-200 p-4 '>
                <div className='h-36'>
                    <h1>Logo</h1>
                </div>
                <div className='mt-4 w-full'>
                    <ul className='flex flex-col items-start justify-start gap-5 w-full'>
                        <li className='border p-2 w-full font-bold h-24 text-center'>Dashboard</li>
                        <li className='border p-2 w-full cursor-pointer'>Manage Candidates</li>
                        <li className='border p-2 w-full cursor-pointer'>Manage Voters</li>
                        <li className='border p-2 w-full cursor-pointer'>View Results</li>
                        <li className='border p-2 w-full cursor-pointer'>Election Settings</li>
                    </ul>
                </div>
            </div>
            <div className='h-screen w-full md:w-[85%] flex flex-col items-center justify-start p-4'>
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
        </div>
    )
}

export default HomePage
