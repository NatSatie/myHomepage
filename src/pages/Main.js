import React, { useState}from 'react'
import { Grid, Image} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import avatar from '../img/profileSquare.png'
import marker from '../img/maps-and-flags.svg'
import '../index.css'
import '../components/styleMenu.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Curriculum from '../components/Curriculum'
import About from '../components/About'
import Menu from '../components/Menu'

const Main = () => {
  return(
      <div style={{padding: '0', margin: '0', backgroundColor: '#E6E5FB'}}>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={4}>
              <Menu/>
            </Grid.Column>
            <Grid.Column width={12}>
              <About/>
              <Curriculum/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
  )
}

export default Main
