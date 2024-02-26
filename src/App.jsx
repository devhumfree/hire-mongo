import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Board from './Board'
import Create from './Create'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/job'></Route>
          <Route path='/job/create' element={<Create />}></Route>
          <Route path='/job/board' element={<Board />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
