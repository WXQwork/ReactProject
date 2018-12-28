import React, { Component} from 'react'

import SearchUi from './SearchUi'

import { fromJS } from 'immutable'
import { withRouter } from 'react-router-dom'

class SearchCon extends Component {
    constructor(props){
        super(props)
        this.state = fromJS({
            hotsearch:[]
        })
    }
    render() {
        return (
            <SearchUi {...this.props} data={this.state.hotsearch} search={this.searchgo}></SearchUi>
        )
    }
    async componentDidMount(){
        let data = await fetch('http://api9.wochu.cn/client/v1/goods/SearchByTag')
                .then(response=>response.json())
                .then(result=>{
                    return (fromJS(result.data))
                })
        this.setState({
            hotsearch:this.state.get(['hotsearch'],data)
        })
        
    }
    searchgo (data) {
        let arr = localStorage.getItem("history")
        if(!!arr){
            let hi = JSON.parse(arr)
            hi.push(data)
            localStorage.setItem("history",JSON.stringify(hi))
        }else{
            var newarr = []
            newarr.push(data)
            localStorage.setItem("history",JSON.stringify(newarr))
        }
        this.history.push('/searchitem/'+data)
    }
}

export default withRouter(SearchCon)