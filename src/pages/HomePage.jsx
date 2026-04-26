import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";

import FooterComponent from "../components/FooterComponent";

import ManageCandidates from "./ManageCandidates";
import ManageVoters from "./ManageVoters";
import ViewResults from "./ViewResults";
import ElectionSettings from "./ElectionSettings";
import DashBoard from "./DashBoard";

import {
    resultsIcon,
    voteIcon,
    settingsIcon,
    dashboardIcon,
    candidates,
} from "../assets/assets";

const HomePage = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col md:flex-row h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
            
            {/* Premium Mobile Top Bar */}
            <div className="md:hidden flex items-center justify-between sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg px-6 py-4 border-b border-slate-200 dark:border-slate-800 shadow-sm">
                <h1 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Logo</h1>
                <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>
            </div>

            {/* Overlay */}
            <div 
                className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsSidebarOpen(false)}
            ></div>

            {/* Premium Sidebar */}
            <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'} md:relative md:translate-x-0 z-50 md:z-10 flex flex-col w-72 md:w-[20%] lg:w-[15%] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out`}>

                {/* Logo */}
                <div className="h-24 flex items-center justify-center">
                    <h1 className="text-xl font-bold dark:text-white">Logo</h1>
                </div>

                {/* Navigation */}
                <ul className="flex flex-col gap-2 mt-8">

                    <li>
                        <Link to="/dashboard" onClick={() => setIsSidebarOpen(false)}>
                            <div className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:shadow-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                                <img className="h-6 w-6 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all dark:invert" src={dashboardIcon} alt="Dashboard" />
                                <span>Dashboard</span>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/manage-candidates" onClick={() => setIsSidebarOpen(false)}>
                            <div className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:shadow-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                                <img className="h-6 w-6 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all dark:invert" src={candidates} alt="Candidates" />
                                <span>Candidates</span>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/manage-voters" onClick={() => setIsSidebarOpen(false)}>
                            <div className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:shadow-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                                <img className="h-6 w-6 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all dark:invert" src={voteIcon} alt="Voters" />
                                <span>Manage Voters</span>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/view-results" onClick={() => setIsSidebarOpen(false)}>
                            <div className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:shadow-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                                <img className="h-6 w-6 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all dark:invert" src={resultsIcon} alt="Results" />
                                <span>View Results</span>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/election-settings" onClick={() => setIsSidebarOpen(false)}>
                            <div className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:shadow-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                                <img className="h-6 w-6 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all dark:invert" src={settingsIcon} alt="Settings" />
                                <span>Election Settings</span>
                            </div>
                        </Link>
                    </li>

                </ul>

                {/* Theme Toggle */}
                <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
                    <button 
                        onClick={toggleDarkMode} 
                        className="w-full flex items-center justify-center gap-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 p-3 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 font-medium transition-all duration-300 shadow-sm active:scale-95"
                    >
                        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col w-full md:flex-1 h-[calc(100vh-73px)] md:h-screen relative overflow-hidden">

                <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col">
                    <div className="flex-1 p-4 md:p-8">
                        <Routes>
                            <Route path="/" element={<DashBoard />} />
                            <Route path="/dashboard" element={<DashBoard />} />
                            <Route path="/manage-candidates" element={<ManageCandidates />} />
                            <Route path="/manage-voters" element={<ManageVoters />} />
                            <Route path="/view-results" element={<ViewResults />} />
                            <Route path="/election-settings" element={<ElectionSettings />} />
                        </Routes>
                    </div>
                    <FooterComponent />
                </div>

            </div>
        </div>
    );
};

export default HomePage;