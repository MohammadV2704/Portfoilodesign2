import React from 'react'
import Footer2 from '.././Footer2'
import Navbar from '../Navbar'
import Hero2 from '../Hero2'
import Servicescards from '../Servicescards'
import ProjectCard from '../ProjectCard'
const Portfoilo = () => {
  return (
    <div>
    <Navbar/>
    <Hero2 
      heading="PORTFOILO"
      text="I have completed a variety of projects using a range of technologies. Some examples of my work include..."
    />
    <Servicescards/>
    <ProjectCard/>
     <Footer2/>
    </div>
  )
}

export default Portfoilo
