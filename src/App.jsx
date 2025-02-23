import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { myRouter4 } from './router'

function App() {
  

  return (
    <>
      <RouterProvider router={myRouter4}/>
      <div>Added new meal text</div>
      <div>Pull my changes</div>
    </>
  )
}

export default App
