import './index.css'
import Card from './Card'
import React, { Component } from 'react'
import data from '../data/data.json'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { heading: 'waiting for data to load from database...' }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ heading: 'The Main Heading' })
    }, 3000)
  }
  componentWillUnmount() {}
  render() {
    return (
      <div>
        <div className="app">
          <header className="app-header">
            <img src="/static/logo.png" className="static-logo" alt="logo" />
          </header>
          <div className="grid">
            {data.users.length > 0 ? (
              data.users.map(({ title, text }) => (
                <Card key={title} title={title} text={text} />
              ))
            ) : (
              <div>Their are no users in the database.</div>
            )}
          </div>
        </div>
        <div className="main">
          <h3>{this.state.heading}</h3>
          <p>text paragraph</p>
        </div>
      </div>
    )
  }
}

export default Index
