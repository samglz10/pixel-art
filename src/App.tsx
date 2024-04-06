import { useState, useContext, createContext } from 'react'
import { ColorContext } from './colorContex';
import './App.css'
import Cell from './Cell';
import ColorPicker from './ColorPicker';


const newObject = {color: 'green', setColor: ()=>{}}

const rowOfCells = Array.from({length: 20},()=>{
  return null;
})

function App() {
  const [color, setColor] = useState('red');

  return (
    <>
    <ColorContext.Provider value={{color, setColor}}>
        <ColorPicker />
      {rowOfCells.map((_,rowIndex)=>{
      return rowOfCells.map((__, columnIndex)=>{
          return <Cell key={`${rowIndex}-${columnIndex}`} />
          })
      })}
    </ColorContext.Provider>
    </>
  )
}

export default App
