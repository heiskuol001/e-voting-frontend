import React from 'react'

const CandidateComponent = () => {
    return (
        <>
            <div className='candidate-component-container hidden md:flex flex-row items-center justify-start h-16 bg-gray-100 w-full border md:justify-between px-4'>
                <div>
                    <h1 className='font-semibold'>
                        Candidate Name
                    </h1>
                </div>
                <div>
                    <h1 className='font-semibold'>Position</h1>
                </div>
                <div>
                    <h1 className='font-semibold'>Votes</h1>
                </div>
                <div>
                    <h1 className='font-semibold'>Action</h1>
                </div>
            </div>
            <div className='candidate-component-container hidden md:flex flex-row items-center justify-start h-16 bg-gray-100 w-full border md:justify-between px-4'>
                <div>
                    <img src="candidate-profile.jpg" alt="Candidate Profile" />
                    <h1 className='font-semibold'>Candidate Name</h1>
                </div>
                <div>Guild President 2026</div>
                <div>896</div>
                <div className='flex gap-2'>
                    <button className='bg-blue-800 text-white px-3 py-1 rounded'>Edit</button>
                    <button className='bg-red-800 text-white px-4 py-1 rounded'>Delete</button>
                </div>
            </div>
            <div className='candidate-component-container md:hidden flex items-center justify-evenly h-16 bg-gray-100 w-full border md:justify-between px-4'>
                <div className='w-[50%]'>Candidate Name</div>
                <div className='grid grid-cols-2 gap-2 w-[50%]'>
                    <button className='bg-blue-800 text-white p-1 rounded'>Edit</button>
                    <button className='bg-red-800 text-white p-1 rounded'>Delete</button>
                </div>
            </div>
        </>
    )
}

export default CandidateComponent
