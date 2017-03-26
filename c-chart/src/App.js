import React, { Component } from 'react'
import Chart from './Chart'
import { populate } from './utils'
import './App.css'

const data = populate(30)

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Chart data={data} />
      </div>
    )
  }
}

export default App
