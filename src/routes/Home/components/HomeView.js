import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import { IndexLink, Link } from 'react-router'


class HomeView extends React.Component{
  render(){
    return(
      <div className="container">

       <div>
        Hi stalker !
       </div>
       <div>
         <Link to='/news'>
           News
         </Link>
         {' . '}
         <Link to='/projects'>
           Projects
         </Link>
         {' . '}
         <Link to='/movie'>
           Movie
         </Link>
       </div>

      </div>
    )
  }
}
export default HomeView
