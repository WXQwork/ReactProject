import styled from 'styled-components'
import border from 'components/styled/border.js'

const Scroll = styled.div`
    width: 100%;
    .hot-search{
        width: 100%;
        height: auto;
        p{
            font-size: .15rem;
            color: #333;
            margin-top: .1rem;
        }
        ul{
            background: #f4f5f7;
            width: 100%;
            font-size: .13rem;
            color: #666;
            overflow:hidden;
            li{
                background: #fff;
                width: auto;
                line-height: .25rem;
                margin: .1rem;
                padding: .02rem .1rem;
                float: left;
            }
        }
    }
    .search-his{
        overflow:hidden;
        width: 100%;
        p{
            font-size: .15rem;
            color: #333;
            margin-top: .1rem;
        }
        ul{
            overflow:hidden;
            height: auto;
            width: 100%;
            font-size: .13rem;
            color: #666;
        }
        .clean-his{
            width: 100%;
            margin: .1rem 0 .2rem;
            font-size: .12rem;
            color: #999;
            text-align: center;
        }
    }
`

const Bli = border({
    component:styled.li`
        width: 100%;
        line-height: .25rem;
        padding: .02rem .1rem;
    `,
    color:'#e6e6e6',
    width:'0 0 1px 0'
})

export {
    Scroll,
    Bli
}