import React, { Component } from 'react'

import {
    ListMain,
    Header,
    BorderSearch,
    Main
} from './styledComponents'

import search from 'images/search.png'

import Listitem from './listitem'
import { Tabs, WhiteSpace } from 'antd-mobile'

class ListUiComponent extends Component {
    render () {
        return (
            <ListMain>
                <Header>
                    <BorderSearch onClick={()=>this.props.history.push('/search')}>
                        <img src={search} alt=""/>
                        <div className="search-key">
                            支持首字母搜索
                        </div>
                    </BorderSearch>
                    <div className="shadowWrap"></div>
                </Header>
                <Main>
                    <div>
                    <WhiteSpace />
                    <Tabs tabs={this.props.data.allcai} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                    {this.renderContent}
                    </Tabs>
                    <WhiteSpace />
                    </div>
                </Main>
            </ListMain>
        )
    }
    renderContent = (tab) =>{
        return (<div style={{height: '500px', width:'100%', backgroundColor: '#fff' }}>
                    <Listitem data={tab}></Listitem>
                </div>)
    }
}

export default ListUiComponent