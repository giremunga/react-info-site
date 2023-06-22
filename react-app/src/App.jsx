import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import About from './pages/About'
import Footer from './components/footer'

import Nav from './components/nav'
import{ BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

function App(){
    return(
      
          <div>
            <Router>
              <Routes>
                
            
                <Route path="/about" element={<About/>}/>
            
              </Routes>
            </Router>
            <header>
              <img src={reactLogo} className='logo'/>
              <Nav/>
            </header>
            <h1>Reasons I am excited to learn React!</h1>
            <ol>
              <li>It is a popular library,so I will be able to fit with the cool kids</li>
              <li>I am more likely to get a job as a developer if I know react</li>
            </ol>
            <Footer/>
          </div>
        )
      }
      
      
      

      
      
        
      
      
    
      
    


  

      
        


export default App
