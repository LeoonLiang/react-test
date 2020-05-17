import React from 'react';
import './App.css';
import NavBar from './components/navbar'
import Blog from './components/blog'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navList: ['blog', 'introduct', 'introduct', 'introduct' ],
      blogs: ['ohh,my react', 'ohh,my react2', 'ohh,my react3']
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar navList={this.state.navList}/>
          <Blog blogs={this.state.blogs}/>
        </div>
      </div>
    )
  }
}

export default App;
