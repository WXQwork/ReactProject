import React, { Component } from 'react'

import {
    ListItem17,
    Main,
    Ep
} from './styledComponent'

import {Add} from 'components/common/littletool'

class ListitemContainer extends Component{
    render(){
        return (
            <ListItem17>
                <div className="temp-list1">
                    <div className="temp-title">
                        <span></span>
                        限时特惠
                        <span className="line-rt"></span>
                    </div>
                    <Main>
                        <div className="img-view">
                            <img src={this.props.data.getIn(["items",0,"imgUrl"])} alt=""/>
                            <div className="corner-mark">
                                {
                                    this.props.data.getIn(["items",0,"labels",0,"labelUrl"])===undefined?null:
                                        <img src={this.props.data.getIn(["items",0,"labels",0,"labelUrl"])} alt=""/>
                                }
                            </div>
                        </div>
                        <div className="temp-goods-info">
                            <p className="temp-goods-name">
                                {this.props.data.getIn(["items",0,"goodsName"])}
                            </p>
                            <Ep>{this.props.data.getIn(["items",0,"description"])===undefined?"":this.props.data.getIn(["items",0,"description"])}</Ep>
                            <div className="temp-goods-price">
                                <div className="price-wrap">
                                    <div className="real-price">
                                        ¥<span className="before-point">{this.filtemoney(this.props.data.getIn(["items",0,"price"]))}</span><span className="affter-point">.{this.filtemoneyfloat(this.props.data.getIn(["items",0,"price"]))}</span>    
                                    </div>
                                    <p className="markt-price">¥ {this.props.data.getIn(["items",0,"marketPrice"])}</p>
                                </div>
                                <Add></Add>
                            </div>
                        </div>
                    </Main>
                </div>
            </ListItem17>
        )
    }
    filtemoney(money){
        return parseInt(money)
    }
    filtemoneyfloat(money){
        return parseInt((parseFloat(money)-parseInt(money))*10)
    }
}

export default ListitemContainer