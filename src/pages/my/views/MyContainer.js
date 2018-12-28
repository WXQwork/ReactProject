import React, { Component } from 'react'
import { connect } from 'react-redux'

import MyUi from './MyUi'
import { loadDataAsync,loadMyAllDataAsync } from '../actionCreator'

const mapState = (state)=>{
    return {
        categories:state.my.getIn(['categories']),
        myall:state.my.getIn(['myall'])
    }
}

const mapDispatch = (dispatch)=>{
    return {
        loadCategories () {
            dispatch(loadDataAsync(dispatch))
        },
        loadAllday(){
            dispatch(loadMyAllDataAsync(dispatch))
        }
    }
}

class MyContainer extends Component {
    render () {
        //三次
        return (
            <MyUi {...this.props}></MyUi>
        )
    }
    componentDidMount () {
        this.props.loadCategories()
        this.props.loadAllday()
    }
}

export default connect(mapState,mapDispatch)(MyContainer)