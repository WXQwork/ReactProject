import React, { Component } from 'react'

import { 
    SwiperContent
} from './styledComponent.js'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

class MySwiper extends Component {
    constructor(props){
        super(props)
        this.state={
            carousel:[]
        }
    }
    render () {
        return (
            <SwiperContent>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.carousel.map((value,index)=>{
                                return (<div key={index} className="swiper-slide">
                                        <img src={value.picUrl} alt=""/>
                                    </div>)
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </SwiperContent>
        )
    }
    componentDidMount( ){
    }
    componentWillReceiveProps(){
    }
    shouldComponentUpdate(nextprops){
        let newcate = nextprops.categories.toJS()
        if(newcate.carousel.length>0&&(newcate.carousel.length!==this.state.carousel.length)){
            this.setState({
                carousel:newcate.carousel
            })
            return true
        }else{
            return false
        }
    }
    componentDidUpdate(){
        if(this.state.carousel.length>0){
            new Swiper ('.swiper-container', {
                direction: 'horizontal',
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },  
                loop: true,
                pagination: {
                  el: '.swiper-pagination',
                  bulletActiveClass: 'my-bullet-active',
                }
            })
        }
    }
}

export default MySwiper