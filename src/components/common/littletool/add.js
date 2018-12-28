import React, { Component } from 'react'

import {
    Add
} from './styledComponent'

import addimg from 'images/add.png'

class AddContainer extends Component{
    render(){
        return (
            <Add>
                <img src={addimg} alt=""/>
            </Add>
        )
    }
}

export default AddContainer