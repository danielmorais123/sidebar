import React from 'react';
import AccordionTab from './Accordion';
import TableRow from './TableRow';
import UsersList from './UsersList';

const Dashboard = (props) => {
  return (
    <div className="flex h-screen relative w-full mt-0">
      {props.children}

      <div className="flex justify-center   sm:flex-row items-center w-full p-3 flex-wrap">
        <AccordionTab />
        <UsersList
          sideBarOpened={props.sideBarOpened}
          setSideBarOpened={props.setSideBarOpened}
        />

        <TableRow />
      </div>
    </div>
  );
};

export default Dashboard;
