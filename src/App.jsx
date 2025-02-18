import React, { useEffect, useState } from 'react'
import ScoreCard from "./components/ScoreCard"
import toast, { Toaster } from 'react-hot-toast';


const App = () => {

  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);
  const [winner, setWinner] = useState(null);
  const MAX_SCORE = 10;

  useEffect(() => {
    
    if(scoreTeamA < MAX_SCORE && scoreTeamB < MAX_SCORE){
      return
    }

    if(scoreTeamA == MAX_SCORE){
      setWinner("Team A");
      toast.success("Team A is Win !!!!")
    }
    
    if(scoreTeamB == MAX_SCORE){
      setWinner("Team B");
      toast.success("Team B is Win !!!!")
    }


  }, [scoreTeamA, scoreTeamB])


  return (
    <div className='flex justify-center align-center my-10'>
      <div style={{backgroundColor:"#007a66"}} className='p-4 rounded w-[95%]'>
      <h1 className='text-center text-4xl md:text-6xl  font-bold py-1 md:py-4 text-white'>Score Board</h1>
        <div className='flex justify-evenly flex-wrap m-14'>
         <ScoreCard score={scoreTeamA} teamName="Team A" 
         decreaseScore={()=> {setScoreTeamA(scoreTeamA >= 1 ? scoreTeamA - 1 : 0)}} 
         increaseScore={()=> {setScoreTeamA(scoreTeamA + 1)}}
         winner={winner}
         />

         <ScoreCard score={scoreTeamB} teamName="Team B" 
           decreaseScore={()=> {setScoreTeamB(scoreTeamB >= 1 ? scoreTeamB - 1 : 0)}}
           increaseScore={()=> {setScoreTeamB(scoreTeamB + 1)}}
           winner={winner}
         />
        

        </div>
        {winner ? (<p className='text-center pb-12 text-2xl text-white'><span className='font-bold underline decoration-wavy pr-2'>{winner}</span> is Winner 🏆🏆 Click on Reset Button to Start Again</p>):null}
        <div>
          <button className='bg-teal-600 px-8 rounded mb-8 mx-auto block cursor-pointer text-white py-2 mx-auto text-2xl'
          onClick={()=> {
            setScoreTeamA(0)
            setScoreTeamB(0);
            setWinner(null);
          }}
          >Reset Score</button>
        </div>
      </div>
       <Toaster/>
    </div>
  )
}

export default App;