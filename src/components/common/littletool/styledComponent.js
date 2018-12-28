import styled from 'styled-components'
import ellipsis from 'components/styled/ellipsis.js'

const Add=styled.div`
    height: .26rem;
    width: .26rem;
    display:inline-block;
    img{
        width:100%;
        height: 100%;
        display: block;
    }
`

const Menu=styled.li`
    width: .95rem;
    height: 1.76rem;
    margin:0 .09rem 0 .09rem;
    display:inline-block;
    overflow:hidden;
    background-color:#fff;
    .group-icon{
        height: .95rem;
        width: 100%;
        position:relative;
        img{
            width: 100%;
            height: 100%;
            display: block;
        }
        .isicon{
            width: .3rem;
            height: .3rem;
            position:absolute;
            left: 0;
            top: 0;
            img{
                height: 100%;
                width: 100%;
                display: block;
            }
        }
    }
    .m-price{
        height: .12rem;
        margin-top: .07rem;
        font-size: .1rem;
        color: #bababa;
        text-decoration: line-through;
    }
    .o-price{
        height: .12rem;
        margin-top: .05rem;
        font-size: .12rem;
        color: #001e00;
        line-height: .12rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
`

const Ep = ellipsis({
    component:styled.div`
        width: 100%;
        height: .16rem;
        font-size: .12rem;
        line-height: .16rem;
        margin-top: .12rem;
        color: #666;
    `,
    lineClamp: 1
})

export {
    Add,
    Menu,
    Ep
}