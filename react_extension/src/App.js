import React, { Component, Fragment } from 'react'
import Demo from './components/8_ErrorBoundary/Parent'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* 可以传入相应的数据，props = 101 */}
        <Demo />
      </Fragment>
    )
  }
}
