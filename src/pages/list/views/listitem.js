import React from 'react'

import {
    Listitem
} from './styledComponents'

export default (data)=>{
    //console.log(data.data.children[0][0])
    return (
        <ul style={{padding:'.1rem'}}>
            {
                data.data.children[0].map((val,index)=>{
                    return (<Listitem key={val.id} style={{display:'flex'}}>
                            <img src={val.imgUrl} alt=""/>
                            <p>{val.main}</p>
                        </Listitem>)
                })
            }
        </ul>
    )
}