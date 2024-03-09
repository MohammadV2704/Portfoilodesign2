import React from 'react'
import pp1 from '../assets/DecenVoting.png'
import pp2 from '../assets/Tour.png'
import pp3 from '../assets/ERC20.png'
// import pp4 from '../assets/MV.png'
import './Projectcard.css';
const ProjectCard = () => {
    return (
        <>
            <div className='portfoilo' id='portfoilo'>
                <div className='container'>
                    <h1 className='sub-title'>Personal<span> Project</span></h1>

                    <div className='work-list'>
                        <div className='work'>
                            <img src={pp1} alt='img'></img>
                            <div className='layer'>
                                <h3>Decentalized Voting-System</h3>
                                {/* <p>I bulid Decentalized voting System Using Solidity(Smart Contact)..</p> */}
                                <a href='https://votingbeta.netlify.app/'><i class="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                        </div>

                        <div className='work'>
                            <img src={pp2} alt='img'></img>
                            <div className='layer'>
                                <h3>Tour Website using React.js</h3>
                                {/* <p>(Decentalized Autonomous Organization)is a digital Organization..</p> */}
                                <a href='https://tour-7066123.web.app'><i class="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                        </div>

                        <div className='work'>
                            <img src={pp3} alt='img'></img>
                            <div className='layer'>
                                <h3>ERC20 Token Smart Comtract</h3>
                                {/* <p>
                                    ERC-20 tokens exist in Smart Contracts on the Ethereum Blockchain..</p> */}
                                <a href='https://github.com/MohammadV2704'><i class="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                        </div>
                    </div>

                    <a href='https://github.com/MohammadV2704' className='btn'>See More</a>
                </div>
            </div>

        </>
    )
}

export default ProjectCard
