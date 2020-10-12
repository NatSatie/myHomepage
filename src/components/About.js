import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../index.css'
import '../components/styleAbout.css'
import SocialMedia from '../components/SocialMedia'

const About = () => {
  return(
    <div style={{backgroundColor: '#E6E5FB'}}>
      <h1 class="abouth1"> Sobre: </h1>
      <h3 class="abouth3" style={{ fontSize:'24px',fontWeight:'900'}}> 2016-atual</h3>
      <h3 class="abouth3"> Bacharelado de Ciência da Computação, Universidade Estadual de Campinas, UNICAMP.</h3>
      <h1 class="abouth1" style={{ padding: '3vh 3vw 1vh 3vw', fontSize: '36px', fontWeight: '600' }}> Redes Sociais: </h1>
      <SocialMedia/>
    </div>
  )
}

export default About
