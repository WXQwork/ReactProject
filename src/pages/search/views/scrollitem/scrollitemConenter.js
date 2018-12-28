import React, { Component } from 'react'

import {
    Scrollitem,
    Ep,
    Etp
} from './stysledConenters'

import {Add} from 'components/common/littletool'

class ScrollItemConter extends Component {
    render(){
        return (
            <Scrollitem>
                <div className="img-view">
                    <img src={this.props.data.picUrl} alt=""/>
                    <div className="corner-mark">
                        {
                            this.props.data.goodsLabels.labelUrl===undefined?null:
                                <img src={this.props.data.goodsLabels[0].labelUrl} alt=""/>
                        }
                    </div>
                </div>
                <div className="temp-goods-info">
                    <Etp>{this.props.data.goodsName}</Etp>
                    <Ep>{this.props.data.description}</Ep>
                    <div className="temp-goods-price">
                        <div className="price-wrap">
                            <div className="real-price">
                                ¥<span className="before-point">{this.filtemoney(this.props.data.price)}</span><span className="affter-point">.{this.filtemoneyfloat(this.props.data.price)}</span>    
                            </div>
                            <p className="markt-price">¥ {this.props.data.marketPrice}</p>
                        </div>
                        <Add></Add>
                    </div>
                </div>
            </Scrollitem>
        )
    }
    filtemoney(money){
        return parseInt(money)
    }
    filtemoneyfloat(money){
        return parseInt((parseFloat(money)-parseInt(money))*10)
    }
}

export default ScrollItemConter
