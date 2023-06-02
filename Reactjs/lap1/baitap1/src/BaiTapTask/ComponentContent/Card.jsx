import React from 'react'
import TitleCard from './TitleCard'
import ContentCard from './ContentCard'
const Card = (props) => {
  const borderStyleCard = {
    borderColor: props.borderCard,
  }

  return (
    <div className='card' style={borderStyleCard}>
      <TitleCard
        borderBottom={props.borderCard}
        nameTitleCard={props.title}
        nameCreatorCard={props.creator}
        statusCard={props.status}
      />
      <ContentCard
        contentDescription={props.description}
      />
    </div>
  )
}

export default Card