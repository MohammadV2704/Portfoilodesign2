import React from 'react'
import Footer2 from '.././Footer2'
import Navbar from '../Navbar'
import Hero2 from '../Hero2'
import Resumes from '../Resumes'
const Resume = () => {
  return (
    <>
    <Hero2 
      heading="RESUME"
      text="Explore my background and achievements by reading about my experiences and education."
    />
   <Resumes/>
        <Footer2/>
        <Navbar/>
    </>
  )
}

export default Resume
