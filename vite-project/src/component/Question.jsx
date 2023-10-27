import React, { useState } from 'react'

const Question = ({title, info}) => {
  const [active, setActive] = useState(true);

  return (
    <div className='que'>
        <div className="text">
        <h2>{title}</h2>
        <p>{active? info: ""}</p>
        </div>
      <div className="sign" onClick={()=> {setActive(!active)}}>{active?`-`: `+`}</div>
    </div>
  )
}

export default Question
 