import React from 'react'
import {Grid} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../index.css'
import '../components/styleAbout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return(
    <div style={{backgroundColor: '#E6E5FB'}}>
      <h1 class="abouth1"> Sobre: </h1>
      <h3 class="abouth3" style={{ fontSize:'24px',fontWeight:'900'}}> 2016-atual</h3>
      <h3 class="abouth3"> Bacharelado de Ciência da Computação, Universidade Estadual de Campinas, UNICAMP.</h3>
      <h1 class="abouth1" style={{ padding: '3vh 3vw 1vh 3vw', fontSize: '36px', fontWeight: '600' }}> Redes Sociais: </h1>
      <Grid verticalAlign='middle'style={{ padding: '0vh 1vw'}} >
        <Grid.Row></Grid.Row>
        <Grid.Row style={{ padding: '3vh 0vw 0vh 3vw' }}>
          <Grid.Column style={{ padding: '0vh 0vw'}}>
            <FontAwesomeIcon icon={faCoffee} style={{fontSize: '24px'}}/>
          </Grid.Column>
          <Grid.Column style={{ padding: '0vh 0vw'}}>
            <h3 class="abouth3" style={{ padding: '0vh 0vw' }}> Coffee </h3>
          </Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column style={{ padding: '0vh 0vw'}}>
            <FontAwesomeIcon icon={faCoffee} style={{fontSize: '24px'}}/>
          </Grid.Column>
          <Grid.Column style={{ padding: '0vh 0vw'}}>
            <h3 class="abouth3" style={{ padding: '0vh 0vw' }}> Coffee </h3>
          </Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column style={{ padding: '0vh 0vw'}}>
            <FontAwesomeIcon icon={faCoffee} style={{fontSize: '24px'}}/>
          </Grid.Column>
          <Grid.Column style={{ padding: '0vh 0vw'}}>
            <h3 class="abouth3" style={{ padding: '0vh 0vw' }}> Coffee </h3>
          </Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column style={{ padding: '0vh 0vw'}}>
            <FontAwesomeIcon icon={faCoffee} style={{fontSize: '24px'}}/>
          </Grid.Column>
          <Grid.Column style={{ padding: '0vh 0vw'}}>
            <h3 class="abouth3" style={{ padding: '0vh 0vw' }}> Coffee </h3>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row style={{ padding: '3vh 0vw 0vh 3vw' }}>
          <Grid.Column style={{ padding: '0vh 0vw'}}>
            <FontAwesomeIcon icon={faCoffee} style={{fontSize: '24px'}}/>
          </Grid.Column>
          <Grid.Column style={{ padding: '0vh 0vw'}}>
            <h3 class="abouth3" style={{ padding: '0vh 0vw' }}> Coffee </h3>
          </Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column style={{ padding: '0vh 0vw'}}>
            <FontAwesomeIcon icon={faCoffee} style={{fontSize: '24px'}}/>
          </Grid.Column>
          <Grid.Column style={{ padding: '0vh 0vw'}}>
            <h3 class="abouth3" style={{ padding: '0vh 0vw' }}> Coffee </h3>
          </Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column style={{ padding: '0vh 0vw'}}>
            <FontAwesomeIcon icon={faCoffee} style={{fontSize: '24px'}}/>
          </Grid.Column>
          <Grid.Column style={{ padding: '0vh 0vw'}}>
            <h3 class="abouth3" style={{ padding: '0vh 0vw' }}> Coffee </h3>
          </Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column style={{ padding: '0vh 0vw'}}>
            <FontAwesomeIcon icon={faCoffee} style={{fontSize: '24px'}}/>
          </Grid.Column>
          <Grid.Column style={{ padding: '0vh 0vw'}}>
            <h3 class="abouth3" style={{ padding: '0vh 0vw' }}> Coffee </h3>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default About
