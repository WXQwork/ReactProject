import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    PeopleContent
} from './styledComponents'

import { withRouter } from 'react-router-dom'

import headerbg from 'images/header_bg3x.png'
import custiconnologin from 'images/custiconnologin.png'
import mytg3x from 'images/mytg3x.png'
import location3x from 'images/location3x.png'
import favorite3x from 'images/favorite3x.png'
import aboutus3x from 'images/aboutus3x.png'

const mapState = (state)=>{
    return {
        issign:state.sign.getIn(['issign'])
    }
}

class PeopleConten extends Component {
    render(){
        return (
            <PeopleContent>
                <div className="header-logo">
                    <img src={headerbg} alt=""/>
                </div>
                <div className="cust-icon">
                    <img onClick={()=>this.props.history.push('/sign')} src={custiconnologin} alt=""/>
                    {
                        this.props.issign!=='true'?<p>未登录</p>:<p>某某某</p>
                    }
                </div>
                <div className="balance-coupon"></div>
                {
                    this.props.issign!=='true'?null:
                    (<div className="center-nav">
                        <ul className="border-line">
                            <li>
                                <img src={mytg3x} alt=""/>
                                <p>我的团购</p>
                            </li>
                            <li>
                                <img src={location3x} alt=""/>
                                <p>收货地址</p>
                            </li>
                            <li>
                                <img src={favorite3x} alt=""/>
                                <p>我的收藏</p>
                            </li>
                            <li>
                                <img src={aboutus3x} alt=""/>
                                <p>关于我厨</p>
                            </li>
                        </ul>
                    </div>)
                }
            </PeopleContent>
        )
    }
    componentDidMount(){
        console.log(this.props.issign==='false')
    }
}

export default withRouter(connect(mapState)(PeopleConten))