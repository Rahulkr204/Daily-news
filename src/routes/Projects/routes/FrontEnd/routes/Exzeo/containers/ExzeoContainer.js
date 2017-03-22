import { connect } from 'react-redux'
import { fetchData,isSourceLoading } from '../modules/ExzeoModule'
import Exzeo from '../components/Exzeo'

const mapActionCreators = {
  fetchData,
  isSourceLoading
}

const mapStateToProps = (state) => {
  return({
    data:state.Exzeo.data,
    isLoading:state.Exzeo.isLoading
  })
}

export default connect(mapStateToProps, mapActionCreators)(Exzeo)
