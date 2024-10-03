import React from 'react';
import styles from "./event.module.css"

const Event = ({data}) => {
  const {images, title, description, planned_at, location_name, location_link} = data;

  return (
    <div className={styles.event}>
      <img src={images[0].url} alt='photo about event'/>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.details}>
        <p className={styles.date}>{planned_at.toUTCString()}</p>
        <p>{`Location: `}
          <a className={styles.place} href={location_link} >{location_name}</a>
        </p>
      </div>
    </div>
  )
}

export default Event