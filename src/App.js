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
      monsters: [],
      searchField: ''
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
        <input
          type='search'
          placeholder='Search monsters'
          // onChange={e => console.log(e.target.value)} />
          onChange={e => { // wrap in brackets
            this.setState({ searchField: e.target.value })
            console.log(this.state) //
          }}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    )
  } // END RENDER
} // END CLASS App
export default App
