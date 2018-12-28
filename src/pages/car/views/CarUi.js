import React, { Component } from 'react'

import {
    CarContent,
    Noresult
} from './styledComponters'

import {NorMenu} from 'components/common/littletool'

class CarUi extends Component {
    render(){
        return (
            <CarContent ref={el=>this.dog=el}>
                <div>
                    <Noresult>
                        <div className="button-yellow">登录</div>
                    </Noresult>
                    <div className="recommend-list-container">
                        <div className="recommend-list-title"></div>
                        <ul className="recommend-list">
                            {
                                this.props.data[0]===undefined?null:
                                    this.props.data.map((val,index)=>{
                                        return <NorMenu key={val.goodsGuid} data={val}></NorMenu>
                                    })
                            }
                        </ul>
                        {
                            this.props.isstart===true?<div className="load-more">正在加载数据...</div>:null
                        }
                        {
                            this.props.isbottom===true?<div className="load-more">到底啦~~~</div>:null
                        }
                    </div>
                </div>
            </CarContent>
        )
    }
    componentDidMount(){
        this.props.scroll(this.dog)
    }
    componentDidUpdate(){
        if(this.props.finshscroll!==undefined){
            this.props.finshscroll()
        }
    }
}

export default CarUi