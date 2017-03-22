import React from 'react'
import Link from 'react-router'
import './FrontEnd.scss'

class FrontEnd extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="container">
        {
          this.props.children?this.props.children:
          <div>Front</div>
        }
      </div>
    )
  }
}

export default FrontEnd
