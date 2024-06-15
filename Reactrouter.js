import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

import Home from './Home'

import Help from './Help'
import About from './About'
import Services from './Services'
import Sinup from './Sinup'
//import Footer from './Footer'


const Reactrouter = () => {
  return (
    <div>
            <Router>
                <center>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/Home' element={<Home />}/>
                    <Route path='/About' element={<About />}/>
                    <Route path='/Services' element={<Services />}/>
                    <Route path='/Help' element={<Help />}/>
                    
                    <Route path='/SinUp' element={<Sinup />}/>
                    

                </Routes>
                {/* <Footer /> */}
                </center>
            </Router>
      
    </div>
  )
}

export default Reactrouter
