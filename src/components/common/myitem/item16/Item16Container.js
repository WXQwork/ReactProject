import React, { Component } from 'react'

import {
    ListItem16
} from './styledComponent'

class ListitemContainer extends Component{
    render(){
        return (
            <ListItem16>
                <div className="group-list3">
                    <div className="left-view">
                        <img src={this.props.data.getIn(["items",0,"imgUrl"])} alt=""/>
                        <div className="goods-info">
                            {this.props.data.getIn(["items",0,"title"])}
                        </div>
                    </div>
                    <div className="left-view">
                        <div className="rt-top-view">
                            <img src={this.props.data.getIn(["items",1,"imgUrl"])} alt=""/>
                            <div className="goods-info">
                                {this.props.data.getIn(["items",1,"title"])}
                            </div>
                        </div>
                        <div className="rt-bottom-view">
                            <img src={this.props.data.getIn(["items",2,"imgUrl"])} alt=""/>
                            <div className="goods-info">
                                {this.props.data.getIn(["items",2,"title"])}
                            </div>
                        </div>
                    </div>
                </div>
            </ListItem16>
        )
    }
}

export default ListitemContainer