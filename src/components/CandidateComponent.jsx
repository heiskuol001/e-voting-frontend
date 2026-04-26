import React from "react";

const CandidateComponent = () => {
    return (
        <div className="group flex flex-col md:flex-row items-center justify-between p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-full gap-4">
            
            {/* Desktop View (and shared on mobile flex) */}
            <div className="flex items-center w-full md:w-auto gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 shadow-inner flex items-center justify-center text-white font-bold flex-shrink-0">
                    C
                </div>
                <div className="flex flex-col flex-1">
                    <h1 className="font-bold text-slate-800 dark:text-slate-100">Candidate Name</h1>
                    <span className="text-xs text-slate-500 dark:text-slate-400 md:hidden">Guild President 2026</span>
                </div>
                {/* Mobile Votes */}
                <div className="md:hidden font-black text-xl text-slate-700 dark:text-slate-200">
                    896
                </div>
            </div>

            {/* Desktop only columns */}
            <div className="hidden md:flex flex-1 items-center justify-between px-8">
                <div className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full">
                    Guild President 2026
                </div>
                <div className="font-black text-xl text-slate-700 dark:text-slate-200">
                    896
                </div>
            </div>

            {/* Actions */}
            <div className="flex w-full md:w-auto gap-2 mt-2 md:mt-0 pt-3 md:pt-0 border-t md:border-none border-slate-100 dark:border-slate-800">
                <button className="flex-1 md:flex-none bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-blue-600 dark:hover:text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 active:scale-95 text-sm">
                    Edit
                </button>
                <button className="flex-1 md:flex-none bg-red-50 hover:bg-red-600 text-red-600 hover:text-white dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 active:scale-95 text-sm">
                    Delete
                </button>
            </div>
            
        </div>
    );
};

export default CandidateComponent;
