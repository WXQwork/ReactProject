import React, { Component } from 'react'

import {
    ListItem7
} from './styledComponent'

import {Menu} from 'components/common/littletool'

class ListitemContainer extends Component{
    render(){
        return (
            <ListItem7>
                <div className="goods-list">
                    <ul>
                        {
                            this.props.data.getIn(["items"]).map((val,index)=>{
                                return (<Menu key={index} data={val} width={33.33+'%'}></Menu>)
                            })
                        }
                    </ul>
                </div>
            </ListItem7>
        )
    }
}

export default ListitemContainer