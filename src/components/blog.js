import React from 'react';

class Blog extends React.Component {
  render() {
    const { blogs } = this.props
    return (
      <div >
          {
            blogs.map((item, index) => (
             <div key={index}> {item}</div>
            ))
          }
    </div>
    )
  }
}

export default Blog