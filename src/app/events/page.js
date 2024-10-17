import React from 'react'
import HeroBanner from '../../../components/heroBanner/HeroBanner';
import Event from '../../../components/event/Event';
import getEvents from '../../../utils/getEvents';


const page = async () => {

    const events = await getEvents();

  return (
    <div>
        <HeroBanner />
        {events.map(event => {
            return <Event data={event} key={event.id}/>
        })}
    </div>
  )
}

export default page