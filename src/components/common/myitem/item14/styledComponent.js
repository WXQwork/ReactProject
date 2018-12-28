import styled from 'styled-components'
import border from 'components/styled/border.js'

const BorderListItem14 = border({
    component:styled.div`
    height: 100%;
    height: .58rem;
    background-color:#fff;
    transition:all .3s;
    overflow:hidden;
    &.active{
        height: 1.72rem;
        .broadcast-content .am-wingblank.am-wingblank-lg .myitem-carousel .slider-frame ul{
            li:nth-child(1){
                border-bottom:1px solid #e5e5e5 !important;
            }
            li:nth-child(2){
                border-bottom:1px solid #e5e5e5 !important;
            }
        }
    }
    .wochu-broadcast{
        width: 100%;
        padding:0 .12rem;
        height: .58rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        position:relative;
        .broadcast-title{
            width:.42rem;
            height: .3rem;
            padding-right:.12rem;
            border-right: 1px solid #e5e5e5;
            img{
                height: 100%;
                width: 100%;
                display: block;
            }
        }
    }
    .broadcast-content{
        flex:1;
        height:.57rem;
        .am-wingblank.am-wingblank-lg {
            margin-left: 0;
            margin-right: 0;
            height: 100%;
            width: 100%;
            .myitem-carousel{
                width: 100% !important;
                height: 100% !important;
                .slider-frame{
                    width:100% !important;
                    height: 100% !important;
                    ul{
                        height: .57rem !important;
                        li{
                            height: .57rem !important;
                            padding-top: .12rem !important;
                            padding-left: .13rem !important;
                            padding-bottom:.12rem !important;
                            .v-item{
                                width:90%;
                                height: .33rem;
                                line-height:.33rem;
                                color:#001e00;
                                font-size:.13rem;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis
                            }
                        }
                    }
                }
            }
        }
        .my-carousel .v-item {
            height: 36px;
            line-height: 36px;
            padding-left: 10px;
        }
    }
    .jiantou{
        position:absolute;
        right:.1rem;
        top:.2rem;
        transition:all .3s;
    }
    .jiantoutop{
        transform:rotate(180deg);
    }

`,
    color: '#e5e5e5',
    radius: 0,
    width: '1px 0 0 0'
})

export {
    BorderListItem14
}