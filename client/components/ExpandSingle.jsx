import React from 'react'

const ExpandSingle = props => {

  return (
      <img id="expandImg" className={`image-${props.item.id}`}src={props.item.src} />
  )
}

export default ExpandSingle