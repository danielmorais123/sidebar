import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from './events/EditEvent';

const RightCalendar = (props) => {
  const [events, setEvents] = useState([
    { title: 'event 1', date: '2022-08-25' },
    {
      title: 'event 2',
      start: '2022-08-20',
      end: '2022-08-22',
      backgroundColor: 'red',
      borderColor: 'red',
    },
  ]);

  const { show, setShow } = props;
  return (
    <div className="bg-white w-4/6 p-2 mx-5 rounded-lg h-auto">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        editable={true}
        selectable={true}
        events={events}
        eventClick={(e) => {
          console.log(e.event);
          setShow(true);
        }}
      />
    </div>
  );
};

export default RightCalendar;
