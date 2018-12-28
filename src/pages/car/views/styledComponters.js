import styled from 'styled-components'
import recommend from 'images/recommend.png'

const CarContent = styled.div`
    height: 100%;
    width: 100%;
    overflow:hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .recommend-list-container{
        padding: .5rem .14rem 0.2rem;
        width: 100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        .recommend-list-title{
            margin-bottom: .15rem;
            width: 2.36rem;
            height: .15rem;
            background: url(${recommend}) center/100%;
        }
        .recommend-list{
            width: 100%;
        }
        .load-more{
            color: #666;
            font-size: .14rem;
            line-height:.14rem;
            width:100%;
            height: .2rem;
            text-align:center;
        }
    }
`

const Noresult = styled.section`
    margin-top:1.35rem;
    height: .66rem;
    position:relative;
    .button-yellow{
        position:absolute;
        width: 1.2rem;
        line-height: .3rem;
        left: 50%;
        top:.15rem;
        margin-left: -0.6rem;
        color: #f67d30;
        text-decoration: none;
        font-size: .15rem;
        border: 1px solid #f67d30;
        text-align: center;
        display: inline-block;
    }
`

export {
    CarContent,
    Noresult
}