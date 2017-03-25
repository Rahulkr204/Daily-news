import React from 'react'
import { IndexLink, Link } from 'react-router'
import './MovieApp.scss'
import _ from 'lodash'


class MovieApp extends React.Component{
  constructor(props){
    super(props);
  }
  onTextUpdate = (e)=>{
    let param = {};
    param[e.target.name]=e.target.value;
    this.props.handleTitleText(param);
  }
  fetchMovies=()=>{
    let title = this.props.inputElement.title
    this.props.fetchMovies(title)
  }
  render(){
    let title = this.props.inputElement.title
    let response = this.props.movies
    let movieList = _.get(response,'Search')
    let moviesContainer = null;
    if (movieList) {
      moviesContainer = movieList.map((obj,key)=>{
        let poster = null
        if (obj.Poster=='N/A') {
          poster = 'http://simpleicon.com/wp-content/uploads/movie-1.png'
        }
        else {
          poster = obj.Poster
        }
        return(
          <div key={key} className="movieCard">
            <div className="movieCard_poster">
              <img src={poster} />
            </div>
            <div className="movieCard_details">
              <div className="movieCard_title">
                {obj.Title}
              </div>
              <div className="movieCard_year">
                Released : {obj.Year}
              </div>
              <div className="movieCard_imdb">
                <Link to={`http://www.imdb.com/title/`+obj.imdbID}>
                  IMDB
                </Link>
              </div>
            </div>

          </div>
        )
      })
    }
    console.log(response);
    return(
      <div className="container">
        <div className="pageTitle">
          React Movie App
        </div>
        <div className="searchContainer">
          <input onChange={this.onTextUpdate} value={title} type="text" name="title" placeholder="Search movies ..."></input>
          <button onClick={this.fetchMovies}>Search</button>
        </div>
        { this.props.isLoading?
          <div>
            Loading....
          </div>:
          <div className="movieContainer">
            {moviesContainer}
          </div>
        }
      </div>
    )
  }
}

export default MovieApp
