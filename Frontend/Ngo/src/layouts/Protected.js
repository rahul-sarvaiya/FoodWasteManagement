import React,{useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
export function Protected(props){
    const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('user-info'))
    {
      navigate('/login')
    }
  },[])
    let Cmp=props.Cmp
    return(
        <>
        <Cmp iconname={props.iconname}/>
        </>
    )
}