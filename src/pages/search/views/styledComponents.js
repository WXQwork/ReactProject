import styled from 'styled-components'
import border from 'components/styled/border.js'

const SearchContainer = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
`
const Conent = styled.div`
    height: 100%;
    height: 100%;
    display:flex;
    flex-direction:column;
`

const SearchHeader = border({
    component:styled.header`
    height: .44rem;
    width: 100%;
    background-color:#fff;
    display:flex;
    align-items:center;
    .am-search{
        height: .29rem !important;
        flex:1 !important;
        padding:0 !important;
        margin-left:.05rem !important;
        margin-right:.1rem !important;
        background-color:#fff !important;
        .am-search-input{
            border-radius:10px !important;
            background-color:#f1f2f6 !important;
        }
    }
`,
    color: '#e5e5e5',
    radius: 0,
    width: '0 0 1px 0'
})

const Main = styled.div`
    width: 100%;
    flex:1;
    background-color:#fff;
    padding:0 .1rem;
    overflow:hidden;
    .result-desc{
        width: 100%;
        height: .35rem;
        line-height: .35rem;
        text-align: center;
        font-size: .12rem;
        color: #666;
    }
    .no-more-goods{
        width: 100%;
        line-height: .35rem;
        font-size: .13rem;
        color: #999;
        text-align: center;
    }
    .goods-list{
        font-size: .14rem;
        width: 100%;
        overflow:hidden;
    }
`

export {
    SearchContainer,
    SearchHeader,
    Conent,
    Main
}