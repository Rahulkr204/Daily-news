import { connect } from 'react-redux'
import { fetch,onSourceChange,onClickSourceFetchNews } from '../modules/ProjectsModule'
import Projects from '../components/Projects'

const mapActionCreators = {
  fetch,
  onSourceChange,
  onClickSourceFetchNews
}

const mapStateToProps = (state) => {
  return({
  })
}

export default connect(mapStateToProps, mapActionCreators)(Projects)
