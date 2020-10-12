import React from 'react'
import {Grid} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../index.css'
import '../components/styleAbout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab)

const SocialMedia = () => {
  return(
    <div>
      <Grid collumns={6} verticalAlign='middle' style={{padding: '0vh 4vw'}}>
        <Grid.Row>
          <Grid.Column>
            <FontAwesomeIcon icon={['fab', 'github']} color="indigo" style={{fontSize: '24px'}}/>
          </Grid.Column>
          <Grid.Column>
            <h3 class="socialMediah3"> <a href=""> Github </a></h3>
          </Grid.Column>
          <Grid.Column> </Grid.Column>
          <Grid.Column>
            <FontAwesomeIcon icon={['fab', 'behance']} color="indigo" style={{fontSize: '24px'}}/>
          </Grid.Column>
          <Grid.Column>
            <h3 class="socialMediah3"> <a href=""> Behance </a></h3>
          </Grid.Column>
          <Grid.Column> </Grid.Column>
          <Grid.Column>
            <i class="ai ai-lattes ai-3x" style={{fontSize: '24px', color:'indigo'}}></i>
          </Grid.Column>
          <Grid.Column>
            <h3 class="socialMediah3"> <a href=""> Lattes </a></h3>
          </Grid.Column>
          <Grid.Column> </Grid.Column>
          <Grid.Column>
            <FontAwesomeIcon icon={['fab', 'dev']} color="indigo" style={{fontSize: '24px'}}/>
          </Grid.Column>
          <Grid.Column>
            <h3 class="socialMediah3"> <a href=""> DEV </a></h3>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default SocialMedia
