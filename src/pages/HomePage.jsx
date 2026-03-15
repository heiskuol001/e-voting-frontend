import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import VoteComponent from '../components/VoteComponent'
import ElectionControl from '../components/ElectionControl'
import CandidateComponent from '../components/CandidateComponent'
import FooterComponent from '../components/FooterComponent'
import ManageCandidates from './ManageCandidates'
import ManageVoters from './ManageVoters'
import ViewResults from './ViewResults'
import ElectionSettings from './ElectionSettings'
import DashBoard from './DashBoard'
import { resultsIcon, voteIcon,settingsIcon, dashboardIcon, candidates } from '../assets/assets'

const HomePage = () => {
    return (
        <>
            <div className='home-page-container flex flex-col items-center justify-start h-screen bg-gray-100 w-full md:flex-row'>
            <div className='hidden md:flex md:flex-col  md:w-[15%] h-screen bg-gray-200 p-4 '>
                <div className='h-36'>
                    <h1>Logo</h1>
                </div>
                <div className='mt-4 w-full'>
                    <ul className='flex flex-col items-start justify-start gap-5 w-full'>
                            <li className='border p-2 w-full font-bold h-12 text-center'><Link to='/dashboard' >
                                <div className='flex items-center justify-center gap-2'>
                                    <div className='flex items-center justify-center gap-2 '>
                                    <img className='h-10' src={dashboardIcon} alt="Dashboard icon" />
                                </div>
                                <div className='text-sm'>
                                        dashboard
                                </div>
                                </div>
                            </Link></li>
                            <li className='border p-2 w-full font-bold h-12 text-center'><Link to='/manage candidates' >
                                <div className='flex items-center justify-center gap-2'>
                                    <div className='flex items-center justify-center gap-2 '>
                                    <img className='h-10' src={candidates} alt="Candidates icon" />
                                </div>
                                <div className='text-sm'>
                                        Candidates
                                </div>
                                </div>
                            </Link></li>
                            <li className='border p-2 w-full font-bold h-12 text-center'><Link to='/manage voters' >
                                <div className='flex items-center justify-center gap-2'>
                                    <div className='flex items-center justify-center gap-2 '>
                                    <img className='h-10' src={voteIcon} alt="View Results icon" />
                                </div>
                                <div className='text-sm'>
                                        Manage Voters
                                </div>
                                </div>
                            </Link></li>
                            <li className='border p-1 w-full font-bold h-12 text-center flex flex-col justify-center items-center'><Link to='/view results' >
                                <div className='flex items-center justify-center gap-2'>
                                    <div className='flex items-center justify-center gap-2 '>
                                    <img className='h-10' src={resultsIcon} alt="View Results icon" />
                                </div>
                                <div className='text-sm'>
                                     View Results
                                </div>
                                </div>
                            </Link></li>
                            <li className='border p-2 w-full font-bold h-12 text-center'><Link to='/election settings' >
                                <div className='flex items-center justify-center gap-2'>
                                    <div className='flex items-center justify-center gap-2 '>
                                    <img className='h-10' src={settingsIcon} alt="Election Settings icon" />
                                </div>
                                <div className='text-sm'>
                                     Election Settings
                                </div>
                                </div>
                            </Link></li>
                    </ul>
                </div>
            </div>
            <div className='w-full md:w-[85%] flex flex-col items-center justify-start'>
                <Routes>
                    <Route path='/dashboard' element={<DashBoard />} />
                    <Route path='/manage candidates' element={<ManageCandidates />} />
                    <Route path='/manage voters' element={<ManageVoters />} />
                    <Route path='/view results' element={<ViewResults />} />
                    <Route path='/election settings' element={<ElectionSettings />} />
                </Routes>
            </div>
            
            </div>
            <FooterComponent />
        </>
    )
}

export default HomePage;
