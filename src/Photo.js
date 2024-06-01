import React from 'react'

const Photo = (props) => {
  return (
    <div className='main'>
    <div className="flex">
   
    <h2>{props.text}</h2>
    <h6>{props.subtext}</h6>
    <img src={props.imgurl} alt="" />
    <p>{props.para}</p>
   
    </div>

    </div>
  )
}

export default Photo