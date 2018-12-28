import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import ListUl from './ListUi'

class ListContain extends Component {
    constructor(props){
        super(props)
        this.state={
            allcai:[]
        }
    }
    render() {
        return (
            <ListUl data={this.state} {...this.props}></ListUl>
        )
    }
    async componentDidMount(){
        let cais = await fetch('./listitem.json')
            .then(response=>response.json())
            .then(result=>{
                return result
            })
        this.setState({
            allcai:cais
        })
    }

}

export default withRouter(ListContain)