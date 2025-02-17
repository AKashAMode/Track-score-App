import React, { useEffect, useState } from 'react'
import ScoreCard from "./components/ScoreCard"


const App = () => {

  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);


  useEffect(() => {
    
    if(scoreTeamA < 10 && scoreTeamB < 10){
      return
    }

    if(scoreTeamA == 10){
      alert("Team A is Win !!!!")
    }
    
    if(scoreTeamB == 10){
      alert("Team B is Win !!!!")
    }


  }, [scoreTeamA, scoreTeamB])


  return (
    <div>
      <div>
      <h1 className='text-center text-4xl md:text-6xl  font-bold py-1 md:py-4'>Score Board</h1>
        <div className='flex justify-evenly flex-wrap m-14'>
         <ScoreCard score={scoreTeamA} teamName="Team A" 
         decreaseScore={()=> {setScoreTeamA(scoreTeamA - 1)}} 
         increaseScore={()=> {setScoreTeamA(scoreTeamA + 1)}}/>

         <ScoreCard score={scoreTeamB} teamName="Team B" 
           decreaseScore={()=> {setScoreTeamB(scoreTeamB - 1)}}
           increaseScore={()=> {setScoreTeamB(scoreTeamB + 1)}}
         />
        

        </div>
        <div>
          <button className='bg-teal-600 px-8 rounded mb-8 mx-auto block cursor-pointer text-white py-2 mx-auto text-2xl'
          onClick={()=> {
            setScoreTeamA(0)
            setScoreTeamB(0);
          }}
          >Reset Score</button>
        </div>
      </div>

    </div>
  )
}

export default App