import { connect } from 'react-redux'
import { fetch,onSourceChange,onClickSourceFetchNews } from '../modules/FrontEndModule'
import FrontEnd from '../components/FrontEnd'

const mapActionCreators = {
  fetch,
  onSourceChange,
  onClickSourceFetchNews
}

const mapStateToProps = (state) => {
  return({

  })
}

export default connect(mapStateToProps, mapActionCreators)(FrontEnd)
