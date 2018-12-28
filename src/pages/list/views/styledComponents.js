import styled from 'styled-components'
import border from 'components/styled/border.js'

const ListMain = styled.div`
    height: 100%;
    width: 100%;
    overflow:hidden;
    display:flex;
    flex-direction:column;
`


const Header = styled.header`
    height: .55rem;
    width: 100%;
    background: #fff;
    padding-top:.06rem;
    .shadowWrap{
        height: .11rem;
        background: #f4f5f7;
    }
`

const BorderSearch = border({
    component:styled.div`
        margin:0 .12rem .06rem;
        padding:0 .12rem;
        height: .34rem;
        display:flex;
        align-items:center;
        justify-content:space-between;
        img{
            width: .2rem;
            height: .2rem;
            display: block;
        }
        .search-key{
            flex:1;
            height: .31rem;
            font-size: .14rem;
            line-height: .34rem;
            color: #ccc;
            padding-left:.05rem;
        }
    `,
    color: '#ccc;',
    radius: 6,
    width: '1px'
})

const Main = styled.div`
    flex:1;
    width: 100%;
    background-color:#fff;
    overflow:hidden;
    .am-whitespace{
        height: 0 !important;
    }
    .am-tabs{
        .am-tabs-tab-bar-wrap{
            .am-tabs-default-bar{
                .am-tabs-default-bar-content{
                    .am-tabs-default-bar-tab{
                        color: #666 !important;
                    }
                    .am-tabs-default-bar-tab-active{
                        color: #6eb042 !important;
                    }
                    .am-tabs-default-bar-underline{
                        border-color:#6eb042 !important;
                    }
                }
            }
        }
    }
`

const Listitem = styled.li`
    width:33.333333%;
    height: 1.1rem;
    padding:.1rem .1rem;
    display: inline-block !important;
    img{
        width:100%;
        display: block;
    }
    p{
        height: .3rem;
        margin-top:.1rem;
        line-height:.3rem;
        color: #666;
        text-align:center;
        font-size: .14rem;

    }
`

export {
    ListMain,
    Header,
    BorderSearch,
    Main,
    Listitem
}