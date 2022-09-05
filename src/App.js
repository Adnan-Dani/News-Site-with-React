import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import React, { Component, Fragment } from 'react'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <News/>
      </Fragment>
    )
  }
}
