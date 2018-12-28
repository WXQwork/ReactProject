import React, { Component } from 'react'

import {
    ListItem4
} from './styledComponent'

class ListitemContainer extends Component{
    render(){
        return (
            <ListItem4>
                <div className="img-link">
                    <img src={this.props.data.getIn(["items",0,"imgUrl"])} alt=""/>
                </div>
            </ListItem4>
        )
    }
}

export default ListitemContainer