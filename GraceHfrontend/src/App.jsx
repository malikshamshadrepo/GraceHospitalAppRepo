import React from 'react'
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import Treatment from './Pages/Treatment';
import { Route, Routes } from 'react-router-dom';
import Doctors from './Pages/Doctors';

function App() {



  return (
    <>
      <div className='bg-neutral-200 min-h-screen'>


        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/treatments' element={<Treatment />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>

      </div>

    </>
  )
}

export default App