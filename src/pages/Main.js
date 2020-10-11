import React from 'react'
import { Grid} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../index.css'
import Menu from '../components/Menu'
import About from '../components/About'

class Main extends React.Component {

  render(){
    return(
      <div style={{padding: '0', margin: '0', backgroundColor: '#E6E5FB'}}>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={4}>
              <Menu/>
            </Grid.Column>
            <Grid.Column width={12}>
              <About/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )

  }
}

export default Main
