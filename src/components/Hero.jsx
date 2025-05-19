import React from 'react'
import '../styles/herostyle.css'
import Profilbild from '../assets/profil.jpg'


const Hero = () => {
  return (
    <div className='hero-container'>
        <div class="blob">
          <div className='inner-blob'>
          <h1 className='hero-header'>Emelie Hensfelt</h1>
          <h3 className='h3-header'>SYSTEMUTVECKLARE</h3>
            </div>  
      </div>
     
        <img src={Profilbild} alt="profilbild" className='profilbild'/>
    </div>
  )
}

export default Hero