import React, { useState } from 'react';
import CreateEvent from '../components/calendar/events/CreateEvent';
import LeftCalendar from '../components/calendar/LeftCalendar';
import ModalEvent from '../components/calendar/events/EditEvent';
import RightCalendar from '../components/calendar/RightCalendar';

const Calendar = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div className="flex">
      {props.children}
      <div className="p-2 flex w-full bg-gray-100 flex-col md:flex-row ">
        <LeftCalendar show={showCreate} setShow={setShowCreate} />
        <RightCalendar show={showEdit} setShow={setShowEdit} />
      </div>
      {showEdit ? <ModalEvent show={showEdit} setShow={setShowEdit} /> : null}
      {showCreate ? (
        <CreateEvent show={showCreate} setShow={setShowCreate} />
      ) : null}
    </div>
  );
};

export default Calendar;
