import React, { Component } from 'react'

import {
    ListItem13
} from './styledComponent'

import BScroll from 'better-scroll'
import {Menu} from 'components/common/littletool'

class ListitemContainer extends Component{
    render(){
        return (
            <ListItem13>
                <div className="swiper-view">
                    <div className="swiper-item" ref={el=>this.bs=el}>
                        <ul className="advice">
                            {
                                this.props.data.getIn(["items"]).map((val,index)=>{
                                    return (<Menu key={index} data={val} width={0.95}></Menu>)
                                })
                            }
                        </ul>
                    </div>
                </div>
            </ListItem13>
        )
    }
    componentDidMount(){
        this.bscroll = new BScroll(this.bs,{
            scrollX:true,
            click:true
        })
    }
}

export default ListitemContainer