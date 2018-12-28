import styled from 'styled-components'

const ListItem16=styled.div`
    height: 2.75rem;
    width: 100%;
    .group-list3{
        width: 100%;
        height: 100%;
        padding:.15rem .1rem 0 .1rem;
        display:flex;
        .left-view{
            flex:1;
            background-color:#fff;
            height: 2.6rem;
            border-radius:.03rem;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            position:relative;
            img{
                height: 100%;
                width: 100%;
                display: block;
            }
            .rt-top-view{
                flex:1;
                position:relative;
                img{
                    width:100%;
                    height: 100%;
                    display: block;
                }
            }
            .rt-bottom-view{
                flex:1;
                position:relative;
                img{
                    width:100%;
                    height: 100%;
                    display: block;
                }
            }
            .goods-info{
                position:absolute;
                top: 0;
                left: 0;
                padding: .15rem;
                color: #001e00;
                font-size: .15rem;
                line-height: 1;
                font-weight: 700;
            }
        }
    }
`

export {
    ListItem16
}