import React,{useState} from 'react'

const ManageCandidates = () => {
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [electionId, setElectionId] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCandidate = {
      name,
      position,
      electionId
    };
    try {
      const response = await fetch('http://localhost:8000/candidate/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCandidate)
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Candidate added:', data);
        // Optionally, reset form fields or update UI
      }
    } catch (error) {
      console.error('Error adding candidate:', error);
    }
  }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center p-4'>
      
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-500/5 pointer-events-none"></div>

        <div className="text-center mb-8 relative z-10">
            <h1 className="text-3xl font-black text-slate-800 dark:text-slate-100">Add Candidate</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Enter the details to register a new candidate.</p>
        </div>

        <form onSubmit={handleSubmit} className='grid gap-6 relative z-10'>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Candidate Name</label>
            <input onChange={(e)=> setName(e.target.value)} className='p-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all' type="text" id="name" name='name' placeholder='e.g. Jane Doe' required />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="position" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Position</label>
            <input onChange={(e)=> setPosition(e.target.value)} className='p-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all' type="text" id="position" name='position' placeholder='e.g. Guild President' required />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="electionId" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Election ID</label>
            <input onChange={(e)=> setElectionId(e.target.value)} className='p-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all' type="text" id="electionId" name='electionId' placeholder='e.g. ELEC-2026' required />
          </div>
          
          <button className='w-full p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold mt-4 shadow-md hover:shadow-lg transition-all duration-300 active:scale-95' type='submit'>
            Register Candidate
          </button>
        </form>
      </div>

    </div>
  )
}

export default ManageCandidates
