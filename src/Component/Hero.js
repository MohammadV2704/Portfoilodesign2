import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <>
            <div className='hero'>
                <div className='mask'>
                    <img className="into-img"
                    // src='https://wallpaperaccess.com/full/2454628.png'
                    // src='http://www.pixelstalk.net/wp-content/uploads/2016/06/Best-Black-And-Red-Backgrounds.jpg'
                    src='https://wallpaperaccess.com/full/2907044.jpg'
                    
                       
                 />
                </div>
                <div className='content'>
                    <h3>Hello, I'M Mohammad Vohra</h3>
                    <h1>And I'm a <span>[Blockchain Developer]</span></h1>
                    <p>I am student from india with a passion for Full stack Blockchain Developer
                    <br></br>Follow my journey as i strive to improve my skills and Become a proficient
                    <br></br>Full stack Blockchain Developer.</p>
                    
                    <Link to="mailto:Vohramohammad2704#gmail.com" className='btn'>Resume</Link>
                    <Link to="/Contact" className='btn-light'>Contact</Link>
                    <div className='icon'>
                        {/* <a href=''><i class="fa-brands fa-square-facebook"></i></a> */}
                        <a href='https://instagram.com/__mohammad5253__?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D'>
                        <i class="fa-brands fa-instagram"></i></a>
                        <a href='https://twitter.com/VohraMohammad6?t=JS-RKODDkCKefs_P3rgrdg&s=08'><i class="fa-brands fa-twitter"></i></a>
                        <a href='https://www.linkedin.com/in/vohra-mohammad-51b58021b'><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href='https://github.com/MohammadV2704'><i class="fa-brands fa-github"></i></a>
                        {/* <a href='https://discord.com/users/790585295044608020'><i class="fa-brands fa-discord"></i></a> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero

// http://blended-html.com/background-images/bi-background-turquoise-white.png
//https://png.pngtree.com/back_origin_pic/04/21/71/e9dc593a1a0fb3ebd399a35410ddc090.jpg