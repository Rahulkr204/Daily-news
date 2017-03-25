import { connect } from 'react-redux'
import { handleTitleText,fetchMovies } from '../modules/MovieAppModule'
import component from '../components/MovieApp'

const mapActionCreators = {
  handleTitleText,
  fetchMovies
}

const mapStateToProps = (state) => {
  return({
    inputElement:state.MovieApp.title,
    movies:state.MovieApp.movies,
    isLoading:state.MovieApp.isLoading
  })
}

export default connect(mapStateToProps, mapActionCreators)(component)
