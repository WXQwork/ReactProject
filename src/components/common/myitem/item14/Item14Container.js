import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile'

import {
    BorderListItem14
} from './styledComponent'

import jiantouxia from 'images/jiantouxia.png'

class ListitemContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            paomadeng:false
        }
        this.paomadeng = this.paomadeng.bind(this)
    }
    render(){
        return (
            <BorderListItem14 className={this.state.paomadeng?"active":null}>
                <div className="wochu-broadcast">
                    <div className="broadcast-title">
                        <img src={this.props.data.getIn(['templateImgUrl'])} alt=""/>
                    </div>
                    <div className="broadcast-content">
                        <WingBlank>
                            <Carousel className="myitem-carousel"
                            vertical
                            dots={false}
                            dragging={false}
                            swiping={false}
                            autoplay={!this.state.paomadeng}
                            infinite={!this.state.paomadeng}
                            >
                            {
                                this.props.data.getIn(['items']).toJS().map((val,index)=>{
                                    return (
                                        <div key={val.title} className="v-item">{val.title}</div>
                                    )
                                })
                            }
                            </Carousel>
                        </WingBlank>
                    </div>
                    <img onClick={this.paomadeng} className={this.state.paomadeng?"jiantoutop jiantou":"jiantou"} src={jiantouxia} alt=""/>
                </div>
            </BorderListItem14>
        )
    }
    paomadeng () {
        var paoma = document.getElementsByClassName("slider-list")[0]
        var fupama = document.getElementsByClassName("slider-frame")[0]
        this.setState({
            paomadeng:!this.state.paomadeng
        })
        if(!this.state.paomadeng){
            paoma.style.transform="translate3d(0px, 0px, 0px)"
            fupama.style.overflow = "inherit"
        }else{
            paoma.style.transform="translate3d(0px, -57px, 0px)"
            fupama.style.overflow = "hidden"
        }
    }
}

export default ListitemContainer