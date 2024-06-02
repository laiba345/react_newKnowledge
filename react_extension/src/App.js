import React, { Component } from 'react'
import Demo from './components/3_Hooks'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 可以传入相应的数据，props = 101 */}
        <Demo/>
      </div>
    )
  }
}
 