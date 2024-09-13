import React from 'react'

const EventComponent = ({data}) => {
  const {images, title, description, planned_at, location_name, location_link} = data;

  return (
    <div className='event'>
      <img src={images[0].url} alt='photo about event'/>
      <h2 className='event-title'>{title}</h2>
      <p className='event-description'>{description}</p>
      <div className='event-details'>
        <p className='event-date'>{planned_at.toUTCString()}</p>
        <p>{`Location: `}
          <a className='event-place' href={location_link} >{location_name}</a>
        </p>
      </div>
    </div>
  )
}

export default EventComponent