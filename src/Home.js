import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Description from './pages/Description'
import Erreur from './pages/Erreur'

const home = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/description/:id' element={<Description/>} />
            <Route path='/*' element={<Erreur/>} />

        </Routes>
    </div>
  )
}

export default home