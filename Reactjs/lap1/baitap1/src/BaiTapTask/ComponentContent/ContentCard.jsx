import React from 'react'

const ContentCard = (props) => {
  return (
    <div className='content-card'>
      <b>Description: </b>
      <p>{props.contentDescription}</p>
    </div>
  )
}

export default ContentCard