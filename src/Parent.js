import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF'
    }
  }

  changeColor = newColor => {
    this.setState({ 
      color: getRandomColor(),
      childrenColor: newColor
    })
  }

  render() {
    const {childrenColor} = this.state;
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={childrenColor} handleColorChange={this.changeColor} />
        <Child color={childrenColor} handleColorChange={this.changeColor} />
      </div>
    )
  }
}

export default Parent
