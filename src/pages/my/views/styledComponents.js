import styled from 'styled-components'

const MyhomeContainer = styled.div`
    height:100%;
    .myhomescroll{
        width: 100%;
        height: 100%;
        overflow:hidden;
    }
`

const MyHeader = styled.header`
    width:100%;
    height:.44rem;
    background:#fff;
    padding:0 .12rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .logo{
        width:.44rem;
        height:.2rem;
        margin-right:.15rem;
        img{
            width:100%;
            height:100%;
            display:block;
        }
    }
    .addr{
        flex:1;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        span{
            padding:0 .1rem;
            font-size:.15rem;
            color:#1f6117;
        }
        img{
            width:.07rem;
            height:.07rem;
            display: block;
        }
    }
    .search{
        width:.18rem;
        height:.18rem;
        img{
            display: block;
            height: 100%;
            width: 100%;
        }
    }
`

const SwiperContainer = styled.div`
    font-size: 0;
    padding-bottom: 44.2666667%;
    position: relative;
`

export {
    MyhomeContainer,
    MyHeader,
    SwiperContainer
}