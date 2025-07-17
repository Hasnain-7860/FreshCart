import React from 'react'
import Eventchild from './Eventchild'

const Eventprops = () => {
    const HandleWelcome=(user)=>{
        alert(`Hey ${user}`)
    };

    const handlemouseover=()=>{
        alert("hello brother")
    }
  return (
    <>
        <Eventchild
        onClick={()=>{
            HandleWelcome('Hasnain')
        }}
         onMouseOver={()=>{
            handlemouseover("I am Hasnain")
        }}
        />
       

    </>
  )
}

export default Eventprops