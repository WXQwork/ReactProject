import React, { Component } from 'react'

import {TopNav} from './styledComponent'

class TopnavContainer extends Component {
    render () {
        if(this.props.categories===undefined){
            return null
        }else{
            return (
                <TopNav>
                    {
                        this.props.categories&&this.props.categories.map((value,index)=>{
                            return (
                                <ul className="topnav" key={index}>
                                    {
                                        value.getIn(['items']).map((val)=>{
                                            return (<li key={val.getIn(['posDes'])}>
                                                    <img src={val.getIn(['imgUrl'])} alt=""/>
                                                </li>)
                                        })
                                    }
                                </ul>
                            )
                        })
                    }
                </TopNav>
            )
        }
    }
}

export default TopnavContainer