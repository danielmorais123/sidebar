import { Avatar, Dropdown } from 'flowbite-react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../api/auth/functions';
import userpic from '../assets/img/user.svg';
import { logout } from '../api/auth/functions';

const AvatarUser = () => {
  const [user] = useAuthState(auth);

  console.log(user);
  return (
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img={userpic} rounded={true} />}
    >
      <Dropdown.Header>
        <span className="block text-sm">{user.displayName}</span>
        <span className="block truncate text-sm font-medium">{user.email}</span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
    </Dropdown>
  );
};

export default AvatarUser;
