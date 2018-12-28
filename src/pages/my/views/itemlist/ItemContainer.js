import React, { Component } from 'react'

import {
    ListMain
} from './styledComponent'

import filteritem from 'components/highorder/filteritem'

class ListitemContainer extends Component {
    render () {
        let acts = this.props.myall.getIn(['acts'])
        if(acts!==undefined){
            return (
                <ListMain>
                    {
                        acts.map((val,index)=>{
                            return filteritem(val,index)
                        })
                    }
                </ListMain>
            )
        }else{
            acts = []
            return null;
        }
    }
}

export default ListitemContainer