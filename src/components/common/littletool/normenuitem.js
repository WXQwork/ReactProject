import React, { Component } from 'react'

import {
    Menu,
    Ep
} from './styledComponent.js'

import Add from './add'

class MenuitemContainer extends Component {
    render () {
        return (
            <Menu className="advice-group" style={{width:this.props.width+'rem'}}>
                <div className="group-icon">
                    <img src={this.props.data.picUrl} alt=""/>
                    <div className="isicon">
                        {/* {
                            this.props.data.getIn(["labels",0,"labelUrl"])===undefined?null:
                            <img src={this.props.data.getIn(["labels",0,"labelUrl"])} alt=""/>
                        } */}
                    </div>
                </div>
                <Ep>{this.props.data.goodsName}</Ep>
                <div className="m-price">
                    ￥{this.props.data.marketPrice}
                </div>
                <div className="o-price">
                    <span>￥{this.props.data.price}</span>
                    <Add></Add>
                </div>
            </Menu>
        )
    }
}

export default MenuitemContainer