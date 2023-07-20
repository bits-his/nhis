import React from 'react'
import { Label } from 'reactstrap'

export default function InputForm(props) {
  return (
    <div style={{display: "flex", flexDirection: 'column'}}>
        {props.label&&
        <Label style={{fontWeight: 'lighter'}}> 
        {props.label} {props.required&&<span className='text-danger'>*</span>}</Label>}
        <input style={{padding: 5}} {...props}/>
    </div>
  )
}

