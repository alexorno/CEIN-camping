import React from 'react'
import HeroBannerEvents from '../../../components/HeroBannerEvents';
import Event from '../../../components/EventComponent';
import getEvents from '../../../utils/getEvents';


const page = async () => {

    const events = await getEvents();

  return (
    <div>
        <HeroBannerEvents />
        {events.map(event => {
            return <Event data={event} key={event.id}/>
        })}
    </div>
  )
}

export default page