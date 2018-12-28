import styled from 'styled-components'
import border from 'components/styled/border.js'
import ellipsis from 'components/styled/ellipsis.js'

const ListItem17=styled.div`
    width: 100%;
    height: 2.21rem;
    background: #fff;
    .temp-list1{
        width:100%;
        height: 100%;
        .temp-title{
            height: auto;
            min-height: .5rem;
            text-align: center;
            font-size: .16rem;
            font-weight: 600;
            padding: .15rem 0;
            line-height: .2rem;
            color: #001e00;
            span{
                width: 0.75rem;
                height: 1px;
                display: inline-block;
                border-bottom: 1px solid #011e00;
                margin: 0 .11rem .05rem;
            }
        }
    }
`

const Main = border({
    component:styled.div`
    width: 100%;
    height:1.56rem;
    padding:.14rem .12rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:#fff;
    .img-view{
        width: 1.3rem;
        height: 1.3rem;
        position:relative;
        img{
            width:100%;
            height: 100%;
            display: block;
        }
        .corner-mark{
            height: .33rem;
            width: .33rem;
            position:absolute;
            left: 0;
            top:0;
            img{
                height:100%;
                width: 100%;
                display: block;
            }
        }
    }
    .temp-goods-info{
        margin-left:.1rem;
        flex:1;
        height: 1.27rem;
        overflow:hidden;
        .temp-goods-name{
            height: .5rem;
            width: 100%;
            line-height: .18rem;
            font-size: .16rem;
            font-weight: 700;
            letter-spacing: .01rem;
            padding-top: .16rem;
            color: #666;
        }
        .temp-goods-price{
            height: .3rem;
            width:100%;
            display:flex;
            align-items:center;
            justify-content:space-between;
            .price-wrap{
                line-height:.3rem;
                .real-price{
                    float: left;
                    color: #ff5918;
                    font-size: .15rem;
                    vertical-align: middle;
                    .before-point{
                        font-size:.2rem;
                        vertical-align: baseline;
                    }
                    .affter-point{
                        font-size:.13rem;
                        vertical-align: baseline;
                    }
                }
                .markt-price{
                    float: left;
                    font-size: .12rem;
                    text-decoration: line-through;
                    color: #999;
                    margin-left: .09rem;
                    line-height: .33rem;
                    vertical-align: middle;
                }
            }
        }
    }
`,
    color: '#e5e5e5',
    radius: 0,
    width: '1px 0 1px 0'
})

const Ep = ellipsis({
    component:styled.div`
        width: 100%;
        height: .28rem;
        font-size: .13rem;
        line-height: .28rem;
        letter-spacing: .01rem;
        margin-bottom: .16rem;
    `,
    lineClamp: 1
})

export {
    ListItem17,
    Main,
    Ep
}