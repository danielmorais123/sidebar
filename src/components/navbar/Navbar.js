import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NotificationsNoneOutlined } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import logo from '../../assets/img/logo.svg';
import MenuItem from '../MenuItem';
import { auth } from '../../api/auth/functions';
import { useAuthState } from 'react-firebase-hooks/auth';
import AvatarUser from '../AvatarUser';
import SearchUser from '../inputs/SearchUser';

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

  return (
    <div
      className={` p-3 flex items-center justify-between md:justify-around ${
        sideBarOpened ? 'hidden xs:flex' : 'flex'
      } `}
    >
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setSideBarOpened(!sideBarOpened)}
          className="cursor-pointer"
        />
        <SearchUser />
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
