import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'flowbite-react';
import React from 'react';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const LeftCalendar = (props) => {
  const { show, setShow } = props;

  const handleShow = () => {
    setShow(true);
  };

  return (
    <div className="p-5 w-full md:w-2/6 flex items-center flex-col bg-white rounded-lg ">
      <Button style={{ width: '80%', marginTop: 10 }} onClick={handleShow}>
        <FontAwesomeIcon style={{ marginRight: 5 }} icon={faCirclePlus} />
        Create New Event
      </Button>
      <p className="text-sm text-gray-400 mt-5">
        Drag and drop your event or click in the calendar
      </p>
      <div className="flex flex-col w-full items-center flex-wrap mt-3">
        <Button
          style={{ width: '75%', marginBottom: 4, background: '#34C38F' }}
        >
          New Event Planning
        </Button>
        <Button
          style={{ width: '75%', marginBottom: 4, background: '#50A5F1' }}
        >
          Meeting
        </Button>
        <Button
          style={{ width: '75%', marginBottom: 4, background: '#F1B44C' }}
        >
          Generating Reports
        </Button>
        <Button style={{ width: '75%', background: '#F46A6A' }}>
          Create New theme
        </Button>
        <img
          src="https://themesbrand.com/skote/layouts/assets/images/verification-img.png"
          className="w-auto md:w-60"
        />
      </div>
    </div>
  );
};

export default LeftCalendar;
