import React from 'react'
import Nav from '../components/nav'



const About = () => {
  return (
    <div>
        <Nav/>
      <main>
        <h1>Fun facts about React!</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Originally created by Jordan Wake</li>
            <li>Has over 100k stars on Github</li>
            <li>Maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      </main>
    </div>
  )
}

export default About
