import React, { Component} from 'react'
import { connect } from 'react-redux'
import { TabBar } from 'antd-mobile'

import cart_n from 'images/cart_n.png'
import cart_r from 'images/cart_r.png'
import index_n from 'images/index_n.png'
import index_r from 'images/index_r.png'
import my_n from 'images/my_n.png'
import my_r from 'images/my_r.png'
import shopping_n from 'images/shopping_n.png'
import shopping_r from 'images/shopping_r.png'

import { MyContainer as My} from 'pages/my'
import { ListContainer as List} from 'pages/list'
import { CarContainer as Car } from 'pages/car'
import { PeopleContainter as People } from 'pages/people'

import {
  GET_HOMENAME_DATA
} from './actionTypes'

const mapState = (state)=>{
    return {
        homename:state.home.getIn(["homename"])
    }
}
const mapDispatch = (dispatch)=>{
  return {
      loadHomename (homename) {
          dispatch({
            type:GET_HOMENAME_DATA,
            homename
          })
      }
  }
}

export class HomeContainer extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            //selectedTab:'cookbooks',
            fullScreen: true,
        }
    }
    render(){
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
              <TabBar
                unselectedTintColor="#666"
                tintColor="#000"
                barTintColor="white"
              >
                <TabBar.Item
                  title="首页"
                  key="cookbooks"
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${index_n}) center center /  25px 25px no-repeat` }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${index_r}) center center /  25px 25px no-repeat` }}
                  />
                  }
                  selected={this.props.homename === 'cookbooks'}
                  onPress={() => {
                    this.props.loadHomename('cookbooks')
                    // this.setState({
                    //   selectedTab: this.props.homename,
                    // });
                  }}
                  data-seed="logId"
                >
                  <My></My>
                </TabBar.Item>
                <TabBar.Item
                  icon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: `url(${shopping_n}) center center /  21px 21px no-repeat` }}
                    />
                  }
                  selectedIcon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: `url(${shopping_r}) center center /  21px 21px no-repeat` }}
                    />
                  }
                  title="分类"
                  key="category"
                  selected={this.props.homename === 'category'}
                  onPress={() => {
                    this.props.loadHomename('category')
                  }}
                  data-seed="logId1"
                >
                  <List></List>
                </TabBar.Item>
                <TabBar.Item
                  icon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: `url(${cart_n}) center center /  21px 21px no-repeat` }}
                    />
                  }
                  selectedIcon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: `url(${cart_r}) center center /  21px 21px no-repeat` }}
                    />
                  }
                  title="购物车"
                  key="map"
                  selected={this.props.homename === 'map'}
                  onPress={() => {
                    this.props.loadHomename('map')
                  }}
                >
                  <Car></Car>
                </TabBar.Item>
                <TabBar.Item
                  icon={{ uri: my_n }}
                  selectedIcon={{ uri: my_r }}
                  title="我的"
                  key="profile"
                  selected={this.props.homename === 'profile'}
                  onPress={() => {
                    this.props.loadHomename('profile')
                  }}
                >
                  <People></People>
                </TabBar.Item>
              </TabBar>
            </div>
        )
    }
}

export default connect(mapState,mapDispatch)(HomeContainer)