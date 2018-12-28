import React from 'react'

import {
    Item14,
    Item4,
    Item17,
    Item13,
    Item16,
    Item7
} from 'components/common/myitem'

export default (date,key)=>{
    if(date.getIn(["templateType"])==='14'){
        return (<Item14 key={key} data={date}></Item14>)
    }
    if(date.getIn(["templateType"])==='4'){
        return (<Item4 key={key} data={date}></Item4>)
    }
    if(date.getIn(["templateType"])==='17'){
        return (<Item17 key={key} data={date}></Item17>)
    }
    if(date.getIn(["templateType"])==='13'){
        return (<Item13 key={key} data={date}></Item13>)
    }
    if(date.getIn(["templateType"])==='16'){
        return (<Item16 key={key} data={date}></Item16>)
    }
    if(date.getIn(["templateType"])==='7'){
        return (<Item7 key={key} data={date}></Item7>)
    }
}