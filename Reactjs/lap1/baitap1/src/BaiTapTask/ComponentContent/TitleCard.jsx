import React from 'react'

const TitleCard = (props) => {
  const borderBottomTitleCard = {
    borderColor: props.borderBottom
  }
  const colorStyleStatus = {
    color: props.borderBottom
  }
  return (
    <div className='title-card' style={borderBottomTitleCard}>
      <b>Title: {props.nameTitleCard}</b>
      <p>Creator: {props.nameCreatorCard}</p>
      <b style={colorStyleStatus}>Status: {props.statusCard}</b>
    </div>
  )
}

export default TitleCard