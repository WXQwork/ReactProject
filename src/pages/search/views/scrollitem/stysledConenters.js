import styled from 'styled-components'
import border from 'components/styled/border.js'
import ellipsis from 'components/styled/ellipsis.js'

const Scrollitem = border({
    component:styled.li`
        width: 100%;
        height: 1.46rem;
        padding: .2rem 0 .16rem;
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
    color:'#e5e5e5',
    width:'0 0 1px 0'
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

const Etp = ellipsis({
    component:styled.div`
        height: .5rem;
        width: 100%;
        line-height: .18rem;
        font-size: .16rem;
        font-weight: 700;
        letter-spacing: .01rem;
        padding-top: .16rem;
        color: #666;
    `,
    lineClamp: 1
})


export {
    Scrollitem,
    Ep,
    Etp
}