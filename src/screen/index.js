import React from 'react'
import { connect } from 'react-redux'

import AuthNavigation from '../navigation/AuthNavigation'
import RootNavigation from '../navigation/RootNavigation'

class IndexScreen extends React.Component {
  render() {
    if(this.props.isLogin) {
      return <RootNavigation />
    } else {
      return <AuthNavigation />
    }
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.auth.isLogin
  }
}
const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexScreen)
