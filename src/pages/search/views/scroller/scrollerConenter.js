import React, { Component } from 'react'

import {
    Scroll,
    Bli
} from './stysledConenters'

class ScrollConent extends Component{
    constructor(props){
        super(props)
        this.state={
            history:[]
        }
        this.removehistory = this.removehistory.bind(this)
    }
    render(){
        return (
            <Scroll>
                <div className="hot-search">
                    <p>热门搜索</p>
                    <ul>
                        {
                            this.props.data===undefined?null:
                                this.props.data.map((val,index)=>{
                                    return (<li key={index}>{val.getIn(["name"])}</li>)
                                })
                        }
                    </ul>
                </div>
                <div className="search-his">
                    <p>搜索历史</p>
                    <ul>
                        {
                            this.state.history.map((val,index)=>{
                                return <Bli key={index}>{val}</Bli>
                            })
                        }
                    </ul>
                    <div className="clean-his" onClick={this.removehistory}>清空搜索历史</div>
                </div>
            </Scroll>
        )
    }
    componentDidMount(){
        if(!!localStorage.getItem("history")){
            this.setState({
                history:JSON.parse(localStorage.getItem("history"))
            })
        }
    }
    removehistory(){
        localStorage.removeItem("history")
        this.setState({
            history:[]
        })
    }
}

export default ScrollConent