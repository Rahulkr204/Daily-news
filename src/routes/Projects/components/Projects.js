import React from 'react'
import Link from 'react-router'
import './Projects.scss'

class Projects extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="container">
        {this.props.children?this.props.children:
          <div>Lol</div>
        }
      </div>
    )
  }
}

export default Projects
