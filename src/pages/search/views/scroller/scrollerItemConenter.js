import React, { Component } from 'react'

import {
    SearchContainer,
    SearchHeader,
    Conent,
    Main
} from '../styledComponents'

import Scrollitem from '../scrollitem/scrollitemConenter'

import BScroll from 'better-scroll'

import { withRouter } from 'react-router-dom'
import { SearchBar } from 'antd-mobile'

import leftjian from 'images/left.png'

class ScrollItemConter extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchs:{},
            keyword:''
        }
    }
    render(){
        return (
            <SearchContainer>
                <Conent>
                    <SearchHeader>
                        <img src={leftjian} alt="" onClick={()=>this.props.history.go(-1)}/>
                        <SearchBar
                            placeholder="热门搜索"
                            ref={ref => this.manualFocusInst = ref}
                            onSubmit={(value)=>{
                                return this.gosearch(value)
                            }}
                        />
                    </SearchHeader>
                    <Main ref={el=>this.scroll=el}>
                        <div>
                            {
                                this.state.searchs.pagination===undefined?
                                    <div className="result-desc">我厨为您找到“{this.state.keyword}”的相关结果0个</div>:
                                    (<div>
                                        <div className="result-desc">我厨为您找到“{this.state.keyword}”的相关结果{this.state.searchs.pagination.totalCount}个</div>
                                    </div>)
                            }
                            {
                                this.state.searchs.pagination===undefined?
                                (<div className="no-more-goods">
                                    没有更多商品！
                                </div>):
                                <ul className="goods-list">
                                    {
                                        this.state.searchs.items===undefined?null:
                                            this.state.searchs.items.map((val,index)=>{
                                                return <Scrollitem key={val.goodsGuid} data={val}></Scrollitem>
                                            })
                                    }
                                </ul>
                            }
                        </div>
                    </Main>
                </Conent>
            </SearchContainer>
        )
    }
    async componentDidMount(){
        var id = this.props.match.params.id
        let data = await fetch('http://api9.wochu.cn/api/goods/searchbykeyword?orderId=0&pageIndex=1&pageSize=20&keyword='+id)
            .then(response=>response.json())
            .then(result=>{
                return result.data
            })
        if(data.items.length>0){
            console.log(data)
            this.setState({
                searchs:data,
                keyword:id
            })
        }else{
            this.setState({
                searchs:{},
                keyword:id
            })
        }
        this.myscroll = new BScroll(this.scroll,{
                            click:true
                        })
        console.log(this.myscroll)
        // this.myscroll.on('scroll',function(){
        //     console.log(0)
        // })
    }
    componentDidUpdate(){
        if(this.myscroll!==undefined){
            this.myscroll.refresh()
            this.myscroll.on('scroll',function(){
                console.log(this)
            })
        }
    }
    async gosearch(value){
        let data = await fetch('http://api9.wochu.cn/api/goods/searchbykeyword?orderId=0&pageIndex=1&pageSize=20&keyword='+value)
            .then(response=>response.json())
            .then(result=>{
                console.log(result)
                return result.data
            })
        if(data.items.length>0){
            this.setState({
                searchs:data,
                keyword:value
            })
        }else{
            this.setState({
                searchs:{},
                keyword:value
            })
        }
    }
}

export default withRouter(ScrollItemConter)