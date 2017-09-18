import React, {Component} from 'react'

class ClickCount extends Component{
  constructor() {
    super()
    this.state = {count: 0}
  }
  handleCount() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    const countStyle = {
      margin: '100px'
    }
    return (
      <div style={countStyle}>
        <button onClick={this.handleCount.bind(this)}>点击我增加</button>
        <p>ClickCount: {this.state.count}</p>
      </div>
    )
  }
}

export default ClickCount
