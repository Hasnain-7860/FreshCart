import React from 'react'

const Eventchild = (props) => {
    const {onClick, onMouseOver} = props
  return (
    <div>
        <button className='bg-yellow-500 text-white px-10 py-3 rounded-lg '  onClick={onClick} >Click</button>
        <button className='bg-red-600 text-white px-10 py-3 rounded-lg' onMouseOver={onMouseOver}>Click</button>
        <button className=''></button>
    </div>
  )
}

export default Eventchild