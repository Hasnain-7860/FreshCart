import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Eventprops from './components/eventprops/Eventprops'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Eventprops/>
    </div>
  )
}

export default App