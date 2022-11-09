import React from 'react';
import {useParams} from 'react-router-dom';


 const ParamHoc = (Component:React.ComponentType)=>{
    return function HocWithHook (rest){
    const param = useParams()
        return ( <Component useParams={ param} {...rest}  />)
    }
}


export {ParamHoc}