import { connect } from 'react-redux'
import { fetch,onSourceChange,onClickSourceFetchNews } from '../modules/WeatherAppModule'
import WeatherApp from '../components/WeatherApp'

const mapActionCreators = {
  fetch,
  onSourceChange,
  onClickSourceFetchNews
}

const mapStateToProps = (state) => {
  return({
    
  })
}

export default connect(mapStateToProps, mapActionCreators)(WeatherApp)
