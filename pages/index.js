import './index.css'
import Card from './Card'

export default () => (
  <div>
    <div className="app">
      <header className="app-header">
        <img src="/static/logo.png" className="static-logo" alt="logo" />
      </header>
      <div className="grid">
        <Card
          title={'First item'}
          text={'This is the text for the first item in the grid.'}
        />
        <Card title={'Second item'} />
        <Card title={'Third item'} />
      </div>
    </div>
    <div className="main">
      <h3>Main Heading</h3>
      <p>text paragraph</p>
    </div>
  </div>
)
