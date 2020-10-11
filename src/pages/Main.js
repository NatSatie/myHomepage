import React from 'react'
import { Grid, Image} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import avatar from '../img/profileSquare.png'
import marker from '../img/maps-and-flags.svg'
import '../index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Menu from '../components/Menu'
import About from '../components/About'

class Main extends React.Component {

  render(){
    return(
      <div>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column width={4}>
              <Menu/>
            </Grid.Column>
            <Grid.Column width={12} style={{backgroundColor:'white'}}>
              <About/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )

  }
}

export default Main
