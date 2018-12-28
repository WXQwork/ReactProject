import styled from 'styled-components'
import ellipsis from 'components/styled/ellipsis.js'

const ListItem13=styled.div`
    height: 1.89rem;
    width: 100%;
    overflow:hidden;
    background-color:#fff;
    .swiper-view{
        width:100%;
        height:100%;
        margin-left:.12rem !important;
        .swiper-item{
            height: 100%;
            width: 100%;
            padding-top:.12rem;
            .advice{
                height: 100%;
                width:max-content;
            }
        }
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
    ListItem13,
    Ep
}