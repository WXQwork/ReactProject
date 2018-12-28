import React, { Component } from 'react'

import CarUi from './CarUi'

import Bscroll from 'better-scroll'

class Carconyainer extends Component {
    constructor(props){
        super(props)
        this.state={
            result:[],
            isstart:false,
            num:1,
            isbottom:false
        }
        this.carscroll = this.carscroll.bind(this)
        this.finshscroll = this.finshscroll.bind(this)
    }
    render(){
        return (
            <CarUi {...this.props} isbottom={this.state.isbottom} data={this.state.result} scroll={this.carscroll} isstart={this.state.isstart} finshi={this.finshscroll}></CarUi>
        )
    }
    async componentDidMount(){
        let data = await fetch('http://api9.wochu.cn/client/v1/goods/GoodsRecommendList?parameters=%7B%22pageSize%22%3A9%2C%22pageIndex%22%3A+1%2C%22type%22%3A%221%22%7D')
            .then(response=>response.json())
            .then((result)=>{
                return result.data.items
            })
        this.setState({
            result:data
        })
    }
    carscroll(ref){
        let that = this
        that.cat = new Bscroll(ref,{
            click:true,
            probeType:1
        })
        that.cat.on('scrollEnd',async function(){
            let maxScroll = this.maxScrollY
            if(this.y<maxScroll+30){
                if(that.state.num<2){
                    that.setState({
                        isstart:true
                    })
                    let newdata = await fetch('http://api9.wochu.cn/client/v1/goods/GoodsRecommendList?parameters=%7B%22pageSize%22%3A9%2C%22pageIndex%22%3A+2%2C%22type%22%3A%221%22%7D')
                        .then(response=>response.json())
                        .then((result)=>{
                            return result.data.items
                        })
                    let newarr = that.state.result
                    newdata.map((val)=>{
                        return newarr.push(val)
                    })
                    that.setState({
                        result:newarr,
                        isstart:false,
                        num:that.state.num+1
                    })
                }else{
                    that.setState({
                        isbottom:true
                    })
                }
            }
        })
    }
    finshscroll(){
        if(this.cat){
            this.cat.refresh()
        }
    }
}

export default Carconyainer