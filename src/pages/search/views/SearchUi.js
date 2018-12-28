import React, { Component} from 'react'

import {
    SearchContainer,
    SearchHeader,
    Main,
    Conent
} from './styledComponents'

import Scroll from './scroller/scrollerConenter'

import { SearchBar } from 'antd-mobile'

import leftjian from 'images/left.png'

class SearchCon extends Component {
    render() {
        return (
            <SearchContainer>
                <Conent>
                    <SearchHeader>
                        <img src={leftjian} alt="" onClick={()=>this.props.history.go(-1)}/>
                        <SearchBar
                            placeholder="热门搜索"
                            ref={ref => this.manualFocusInst = ref}
                            onSubmit={(value)=>{
                                return this.props.search(value)
                            }}
                        />
                    </SearchHeader>
                    <Main>
                        <Scroll {...this.props}></Scroll>
                    </Main>
                </Conent>
            </SearchContainer>
        )
    }
}

export default SearchCon