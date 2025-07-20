import React from 'react'
import './MLCalendar.css'
import '../App.css'


function MLCalendar() {
  return (
    <div className='calendar-container'>
      <div className='calendar-content'>
        <iframe 
          src="https://calendar.google.com/calendar/embed?src=dshi2008mayo%40gmail.com&ctz=America%2FNew_York"
          style={{ border: 0 }}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
          title="ML Club"
        ></iframe>
      </div>
    </div>
  )
}

export default MLCalendar
