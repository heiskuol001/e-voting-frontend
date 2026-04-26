import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import VoteComponent from '../components/VoteComponent'
import ElectionControl from '../components/ElectionControl'
import CandidateComponent from '../components/CandidateComponent'
import CandidateCard from '../components/CandidateCard'

const DashBoard = () => {
    const [data, setData] = useState([]);
    
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/candidate/get');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      console.log('API response:', jsonData);

      setData(jsonData.candidates || jsonData);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  fetchData();
}, []);
    
    return (
        <div className='h-full w-full flex flex-col gap-6 max-w-7xl mx-auto pb-8'>
            <NavBar />
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>
                <VoteComponent />
                <VoteComponent />
                <VoteComponent />
            </div>
            
            <ElectionControl />
            
            <div className='flex flex-col w-full bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden'>
                <div className='w-full p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50'>
                    <h1 className='text-lg font-bold text-slate-800 dark:text-slate-100'>Candidates Control</h1>
                </div>
                <div className='p-6 flex flex-col gap-4 max-h-[60vh] overflow-y-auto scrollbar-hide'>
                    {data.length > 0 ? data.map((candidate) => (
                        <CandidateCard key={candidate._id} name={candidate.name} position={candidate.position} votes={candidate.votes} />
                    )) : (
                        <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                            <p>No candidates found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DashBoard
