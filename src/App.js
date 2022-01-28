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
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App'>
        <input
          type='search'
          placeholder='Search monsters'
          // onChange={e => console.log(e.target.value)} />
          onChange={e => // wrap in brackets {} for multiple lines
            this.setState({ searchField: e.target.value })
            // this.setState({ searchField: e.target.value }, () => // async, use callback: setState(updater, [callback])
            //  console.log(this.state))
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  } // END RENDER
} // END CLASS App
export default App
