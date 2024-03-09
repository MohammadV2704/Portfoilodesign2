import React from 'react'
import './Resumes.css'
const Resumes = () => {
  return (
    <>
      <div className='Container'>
        <div className='row'>

          {/* ****Education SEction starts */}

        </div>
        <div className='col'>
          <header className='title'>
            <h1>Educational <span>Level</span></h1>
          </header>

          <div className='contents'>

            <div className='box'>
              <h4>2020 - 2024</h4>
              <h2>Sankalchand Patel University</h2>
              <h5>college</h5>
              <p>I am Currently pursuing a degree in computer Science Engineering at Sankalchand
                Patel college Of Engineering</p>
            </div>

            <div className='box'>
              <h4>2018 - 2020</h4>
              <h2>P.P.G Experimental High School,Patan</h2>
              <h5>Higher Secondary School</h5>
              <p>I successfully completed my 12th class from Gujrat Secondary and
                High Secondary Education Board.</p>
            </div>

            <div className='box'>
              <h4>2016 - 2017</h4>
              <h2>P.P.G Experimental High School,Patan</h2>
              <h5>Secondary School</h5>
              <p>I successfully completed my 10th class from Gujrat Secondary and
                High Secondary Education Board.</p>
            </div>

          </div>
        </div>
        {/* Section Ends */}
      </div>

      {/* Work Experience*/}
      <div className='Container'>
        <div className='row'>

          {/* Work Experience  start*/}
        </div>
        <div className='col'>
          <header className='title'>
            <h1>Work <span>Experience</span></h1>
          </header>
          <div className='contents'>
            <div className='box'>

              <h4>Sep -  Nov 2023</h4>
              <h2>Full Stack Blockchain Development</h2>
              <h5>Code Eater - internship</h5>
              <p>Gained Hands of experience in writing industry-level code Adhering to best
              practices and coding Standards. Proficiently working with Solidity(Smart Contract),
              Express.js,React.js,web3.js. Gaining valuable experience in building responsive and
              interacting web application.</p>

            </div>

            <div className='box'>

              <h4>July - Aug 2023</h4>
              <h2>Web Development</h2>
              <h5>OctaNet infotech - internship</h5>
              <p>I have recently wrapped up a hands-on web development internship, specializing in HTML
              ,CSS, and JavaScript. Throughout the internship, I adeptly translated design concepts into
              interactive web interfaces. This experience further enriched my skills in front-end development 
              equipping me to create engaging and user-friendly web experiences.</p>

            </div>
          </div>
        </div>
        
          {/* Work Experience  End*/}
      </div>
    </>
  )
}

export default Resumes
