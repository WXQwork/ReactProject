import styled from 'styled-components'

const SignMain = styled.div`
    height: 100%;
    width: 100%;
    overflow:hidden;
    position:fixed;
    .model{
        width: 100%;
        height: 100%;
        position:absolute;
        background-color:rgba(0,0,0,.5);
        z-index:9;
        left:0;
        top:0;
        .imgCode-main{
            border-radius: 10px;
            width: 3.35rem;
            height: 1.78rem;
            background: #fff;
            opacity:1;
            position: absolute;
            z-index: 10;
            top: 50%;
            left: 50%;
            margin-left: -1.675rem;
            margin-top: -.89rem;
            h1{
                height: .78rem;
                line-height: .78rem;
                font-size: .18rem;
                text-align: left;
                font-weight: 400;
                color: #011e00;
                padding: 0 .1rem;
                span{
                    margin-left: .75rem;
                    display: inline-block;
                    color: #6eb242;
                    img{
                        margin-right: .05rem;
                        width: .125rem;
                        display: inline-block;
                        vertical-align: baseline;
                    }
                }
            }
            .main-img{
                font-size: 0;
                img{
                    width: .55rem;
                    height: .55rem;
                    display: inline-block;
                    margin-left: .1rem;
                }
            }
            .error{
                font-size: .12rem;
                text-align: center;
                margin-top: .1rem;
                color: #ff5918;
                img{
                    width: .15rem;
                    height: .15rem;
                    display: inline-block;
                    vertical-align: sub;
                    margin-right: .05rem;
                }
            }
        }
    }
    .modelxiashi{
        display: block;   
    }
    .modelno{
        display: none;   
    }
    .login-top{
        width: 100%;
        height: 3.52rem;
        position: relative;
        img{
            display: block;
            width: 100%;
        }
        .close{
            position: absolute;
            top: .23rem;
            right: .2rem;
            width: .24rem;
        }
    }
    .am-whitespace.am-whitespace-md{
        height: 0 !important;
    }
    .am-tabs-default-bar-tab-active {
        color: #6eb242 !important;
    }
    .am-tabs-default-bar-underline{
        border-color:#6eb242;
    }
    .login-main{
        height: 100%;
        width: 100%;
        padding: 0 .27rem;
        .group-input{
            position:relative;
            input{
                width: 100%;
                height: .55rem;
                font-size: .18rem;
                color: #132d01;
                font-weight: 700;
                outline: none;
                border:none;
                border-bottom:1px solid #ccc;
                ::-webkit-input-placeholder {
                    font-size:.14rem;
                    color: #ccc;
                    font-weight: 400;
                }
                &.noborder{
                    border:none;
                }
            }
            .icon{
                position: absolute;
                top: .19rem;
                right: -.004rem;
                width: .16rem;
                img{
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }
            .eye{
                width: .16rem;
                position: absolute;
                top: .19rem;
                right: 0;
                img{
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }
            .button{
                position: absolute;
                top: .11rem;
                right: 0;
                width: .77rem;
                height: .3rem;
                font-size: .13rem;
                color: #ccc;
                text-align: center;
                border-radius: .06rem;
                outline: none;
                line-height: .3rem;
            }
            .buttonnor{
                background: #eee;
            }
            .buttonactove{
                background:#6eb042;
            }
        }
        button{
            display: inline-block;
            width: 3.2rem;
            height: .5rem;
            font-size: .18rem;
            color: #fff;
            text-align: center;
            line-height: .5rem;
            border-radius: 12px;
            margin-left: .005rem;
            outline: none;
            border:none;
        }
        .btnhui{
            background: #c3dcb3;
        }
        .btnliang{
            background: #6eb042;
        }
        .msg-noLogin{
            margin-top: .2rem;
            text-align: center;
            color: #ccc;
            font-size: .16rem;
        }
    }
`

export {
    SignMain
}