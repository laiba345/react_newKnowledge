import React, { Component } from 'react'
import Demo from './components/2_lazyLoad'

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
