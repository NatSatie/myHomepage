import React from 'react'
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

const Menu = () => {
  return(
    <div id="fundo">
      <Image src={avatar} size='medium' circular />
      <h1 class="title"> Natália Satie Odashima </h1>
      <div>
        <Grid columns={2} verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={4}>
              <img src={marker} alt="marker"/>
            </Grid.Column>
            <Grid.Column width={10} >
              <h3 id="city"> Cidade </h3>
              <p>Campinas, SP, Brasil</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid textAlign='center'>
          <Router>
              <Grid.Row>
                <Link to="/">
                  <h3 class="menuTopic"> Página Principal </h3>
                </Link>
              </Grid.Row>
              <Grid.Row>
                <Link to="/">
                  <h3 class="menuTopic"> Currículo </h3>
                </Link>
              </Grid.Row>
              <Grid.Row>
                <Link to="/">
                  <h3 class="menuTopic"> Habilidades </h3>
                </Link>
              </Grid.Row>
              <Switch>
                <Route path="/curriculum">
                </Route>
                <Route path="/portifolio">
                </Route>
                <Route path="/skills">
                </Route>
                <Route path="/">
                </Route>
              </Switch>
          </Router>
        </Grid>
      </div>
    </div>
  )
}

export default Menu
