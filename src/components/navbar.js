import React from 'react';

class NavBar extends React.Component {
  render() {
    const { navList } = this.props
    return (
      <div >
        <ul>
          {
            navList.map((item, index) => (
             <li key={index}> {item}</li>
            ))
          }
        </ul>
    </div>
    )
  }
}

export default NavBar