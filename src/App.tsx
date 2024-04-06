import { useState } from 'react'
import './App.css'
import Cell from './Cell';
const pixelSquareRows = 20;
const rowOfCells = Array.from({length: 20},()=>{
  return null;
})

function App() {

  return (
    <>
    {rowOfCells.map((_,rowIndex)=>{
     return rowOfCells.map((__, columnIndex)=>{
        return <Cell key={`${rowIndex}-${columnIndex}`} />
        })
    })}
    </>
  )
}

export default App
