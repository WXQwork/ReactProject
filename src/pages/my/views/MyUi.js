import React, { Component } from 'react'

import {
    MyhomeContainer,
    MyHeader,
    SwiperContainer  
} from './styledComponents'

import { withRouter } from 'react-router-dom'

import MySwiper from 'components/common/swiper/'
import Topnav from 'pages/my/views/topnav/TopnavContainer'
import ListItem from 'pages/my/views/itemlist/ItemContainer'

import BScroll from 'better-scroll'

import logoimg from 'images/wochuLogo.png'
import search from 'images/search.png'
import icon from 'images/icon.png'

class MuUiContainer extends Component{
    render(){
        return (
            <MyhomeContainer>
                <MyHeader>
                    <div className="logo">
                        <img src={logoimg} alt=""/>
                    </div>
                    <div className="addr">
                        <span>请填写地址</span>
                        <img src={icon} alt=""/>
                    </div>
                    <div className="search">
                        <img src={search} alt="" onClick={()=>this.props.history.push('/search')}/>
                    </div>
                </MyHeader>
                <div className="myhomescroll" ref={el=>this.myscroll=el}>
                    <div>
                        <SwiperContainer>
                            <MySwiper categories={this.props.categories}></MySwiper>
                        </SwiperContainer>
                        <Topnav categories={this.props.categories.getIn(['recommendedContent'])}></Topnav>
                        <ListItem myall={this.props.myall}></ListItem>
                    </div>
                </div>
            </MyhomeContainer>
        )
    }
    componentDidMount(){
        new BScroll(this.myscroll,{
            click:true
        })
    }
}

export default withRouter(MuUiContainer)