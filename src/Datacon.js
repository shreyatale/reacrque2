import React from 'react'
import "./Style.css"
const Datacon = (props) => {
    console.log(props)
  return (
    <div className='main'>
    <div className="flex">
    <img src={props.imgurl} alt="" />
    <h2>{props.text}</h2>
    <h6>{props.subtext}</h6>
    <p>{props.para}</p>
    <button>Button</button>
    </div>

    </div>
  )
}

export default Datacon