import React from 'react'
import "./InputControl.css"
const InputControl = ({label,...props}) => {
  return (
    <div className='inputcontrol-container'>
     {label && <label >{label}</label> }
     <input type="text" {...props}/>
    </div>
  )
}

export default InputControl
