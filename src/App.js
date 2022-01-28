import React, { Component } from 'react'
import './App.css'
import { CardList } from './components/card-list/card-list.component'
//  const fetch = require('node-fetch')
class App extends Component {
  constructor () {
    super()
    // this.state = {
    //   string: 'Hello Scott'
    // }
    this.state = {
      monsters: []
    }
  } // END CONSTRUCTOR

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render () {
    return (
      <div className='App'>
        <input type='search' placeholder='Search monsters' />
        <CardList monsters={this.state.monsters} />
      </div>
    )
  } // END RENDER
} // END CLASS App
export default App
