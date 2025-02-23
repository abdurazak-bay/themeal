import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { myRouter4 } from './router'

function App() {
  

  return (
    <>
      <RouterProvider router={myRouter4}/>
      <div>Added new meal text</div>
    </>
  )
}

export default App
