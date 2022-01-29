import React, { Component } from 'react'
import './App.css'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

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
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='Search monsters'
          doChange={e => { this.setState({ searchField: e.target.value }) }}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  } // END RENDER
} // END CLASS App
export default App
