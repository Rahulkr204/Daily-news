import { connect } from 'react-redux'
import { fetch,onSourceChange,onClickSourceFetchNews } from '../modules/NewsAppModule'
import NewsApp from '../components/NewsApp'

const mapActionCreators = {
  fetch,
  onSourceChange,
  onClickSourceFetchNews
}

const mapStateToProps = (state) => {
  return({
    news : state.NewsApp.news,
    source: state.NewsApp.source
  })
}

export default connect(mapStateToProps, mapActionCreators)(NewsApp)
