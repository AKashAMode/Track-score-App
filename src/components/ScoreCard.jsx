import React from 'react'

import {CircleMinus as IconCircleMinus, CirclePlus as IconCirclePlus } from "lucide-react"




const ScoreCard = ({score, increaseScore, decreaseScore, teamName, winner}) => {
  const isWinner = winner == teamName;
  return (
    <div className='border-none rounded-2xl p-4 w-[500px] h-[250px] bg-teal-800 m-2'>
           <h2 className='text-center text-4xl font-bold text-white'>{teamName}{isWinner ? "🏆":""}</h2>
           <h3 className='text-center text-6xl py-2 md:text-8xl font-bold text-white'>{score}</h3>

           {winner ? null:
           (<div className='flex justify-between px-8'>
            <IconCircleMinus color='#fff' className='cursor-pointer' size={65}
             onClick={decreaseScore}
            />
            <IconCirclePlus color='#fff' className='cursor-pointer' size={65}
            onClick={increaseScore}/>
           </div>)}
          </div>
  )
}

export default ScoreCard