import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NotificationsNoneOutlined } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import userpic from '../assets/img/user.svg';
import MenuItem from './MenuItem';
import { auth } from '../api/auth/functions';
import { useAuthState } from 'react-firebase-hooks/auth';
import AvatarUser from './AvatarUser';

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const [user, loading, error] = useAuthState(auth);
  const { sideBarOpened, setSideBarOpened } = props;
  const openOrCloseMenu = () => {
    if (showNotifications === true) {
      setShowNotifications(false);
    }
    if (showMenu === true) {
      setShowMenu(false);
      return;
    }
    setShowMenu(true);
  };

  const openOrCloseMenuNotifications = () => {
    if (showMenu === true) {
      setShowMenu(false);
    }
    if (showNotifications === true) {
      setShowNotifications(false);
      return;
    }
    setShowNotifications(true);
  };

  console.log(sideBarOpened);

  return (
    <div
      className={`bg-gray-200 p-3 flex items-center justify-between sm:justify-around ${
        sideBarOpened ? 'hidden xs:flex' : 'flex'
      } `}
    >
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setSideBarOpened(!sideBarOpened)}
          className="cursor-pointer"
        />
        <div className="ml-10 sm:w-auto  bg-gray-300 p-2 sm:rounded-full rounded-md transition ease-in-out delay-100 cursor-pointer">
          <FontAwesomeIcon icon={faSearch} />
          <input
            className="bg-gray-300 border-none border-transparent outline-none pl-3 text-sm hidden sm:inline-flex "
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex items-center relative">
        <NotificationsNoneOutlined
          className="mr-3"
          onClick={openOrCloseMenuNotifications}
        />

        {showNotifications ? <MenuItem isNotification={true} /> : null}
        {user ? (
          <AvatarUser />
        ) : (
          <Button
            variant="contained"
            color="primary"
            className="font-poppins font-bold"
          >
            Login
          </Button>
        )}
        {showMenu ? <MenuItem isNotification={false} /> : null}
      </div>
    </div>
  );
};

export default Navbar;
