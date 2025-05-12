import React from 'react'
import '../styles/herostyle.css'
import Profilbild from '../assets/profil.jpeg'


const Hero = () => {
  return (
    <div className='hero-container'>
        <h1 className='hero-header'>Emelie Hensfelt</h1>
        <h3 className='h3-header'>SYSTEMUTVECKLARE</h3>
        <img src={Profilbild} alt="profilbild" className='profilbild'/>
    </div>
  )
}

export default Hero