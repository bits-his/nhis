import React from 'react'
import { Label } from 'reactstrap'

export default function InputForm(props) {
  return (
    <div style={{display: "flex", flexDirection: 'column'}}>
        {props.label&&
        <Label style={{fontWeight: 'lighter'}}> 
        {props.label} {props.required&&<span className='text-danger'>*</span>}</Label>}
        <input className='input_tag_card' {...props}/>
    </div>
  )
}

