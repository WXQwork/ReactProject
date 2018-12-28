import { 
    GET_CATEGORY_DATA,
    GET_CAROUSEL_DATA,
    GET_RECOMMENDEDCONTENT_DATA,
    GET_MYALL_DATA
} from './actionTypes'

export const loadDataSync = (categories)=>{
    return {
        type:GET_CATEGORY_DATA,
        categories
    }
}

export const loadMyAllDataSync = (myall)=>{
    return {
        type:GET_MYALL_DATA,
        myall
    }
}

export const loadCarouselSync = (carousel)=>{
    return {
        type:GET_CAROUSEL_DATA,
        carousel
    }
}
export const loadRecommendedContentSync = (recommendedContent)=>{
    return {
        type:GET_RECOMMENDEDCONTENT_DATA,
        recommendedContent
    }
}

export const loadDataAsync = (dispatch)=>{
    return ()=>{
        fetch('http://api9.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D')
            .then(response=>response.json())
            .then(result=>{
                dispatch(loadDataSync(result.data))
                //返回的数据结构不同
                //dispatch(loadCarouselSync(result.data.carousel))
                //dispatch(loadRecommendedContentSync(result.data.recommendedContent))
            })
    }
}

export const loadMyAllDataAsync = (dispatch)=>{
    return ()=>{
        fetch('http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H')
            .then(response=>response.json())
            .then(result=>{
                dispatch(loadMyAllDataSync(result.data))
            })
    }
}