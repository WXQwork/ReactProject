import styled from 'styled-components'

const SwiperContent = styled.div`
    height:100%;
    width:100%;
    position:absolute;
    .swiper-container{
        width:100%;
        height: 100%;
        position:absolute;
        z-index:99;
        .swiper-wrapper{
            width:100%;
            height: 100%;
            .swiper-slide{
                height: 100%;
                width: 100%;
                img{
                    height: 100%;
                    width: 100%;
                    display: block;
                }
            }
        }
        .my-bullet-active{
            background-color:#fff;
            opacity:1;
        }
    }
`

export {
    SwiperContent
}