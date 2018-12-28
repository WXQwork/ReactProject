import styled from 'styled-components'

const PeopleContent = styled.div`
    height: 100%;
    width: 100%;
    position:relative;
    .header-logo{
        height: 1.79rem;
        width: 100%;
        img{
            height: 2.27rem;
            width: 100%;
            display: block;
        }
    }
    .cust-icon{
        position:absolute;
        width: 100%;
        top: .39rem;
        left: 0;
        text-align: center;
        font-size: .12rem;
        color: #fff;
        img{
            width: .6rem;
            height: .57rem;
            border-radius: .5rem;
        }
        p{
            margin-top:.2rem;
            text-align: center;
            font-size: .12rem;
            color: #fff;
        }
    }
    .balance-coupon{
        position: absolute;
        width: 3.51rem;
        height: 1.27rem;
        top: 1.47rem;
        left: 50%;
        margin-left: -1.755rem;
        text-align: center;
        border-radius: .12rem;
        padding-top: .2rem;
        background: #fff;
        box-shadow: 1px -1px 20px rgba(34,34,34,.3);
    }
    .center-nav{
        margin-top: 1.2rem;
        background: #fff;
        height: .85rem;
        .border-line{
            border-bottom: 1px solid #e5e5e5;
            width: 100%;
            height: 100%;
            display: flex;
            align-items:center;
            justify-content:center;
            li{
                flex:1;
                height: 100%;
                display: flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                img{
                    width: .28rem;
                    height: .28rem;
                    display: block;
                }
                p{
                    height: .26rem;
                    font-size:.12rem;
                    color:#999;
                    line-height:.26rem;
                    padding-top:.05rem;
                }
            }
        }
    }
`

export {
    PeopleContent
}