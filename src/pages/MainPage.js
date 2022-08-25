import React, { useMemo } from 'react';
import Dashboard from '../components/Dashboard';
import Navbar from '../components/navbar/Navbar';
import Drawer from '../components/sidebar/Drawer';
import SideBar from '../components/sidebar/SideBar';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../api/auth/functions';
import Calendar from './Calendar';

const MainPage = (props) => {
  const [user] = useAuthState(auth);
  const navigation = useNavigate();

  const { url } = props;

  useMemo(() => {
    if (!user) navigation('/login');
  }, [user, navigation]);

  const navAndSideBar = () => {
    return (
      <>
        <div className="blg:hidden">
          <Drawer
            sideBarOpened={props.sideBarOpened}
            setSideBarOpened={props.setSideBarOpened}
          />
        </div>
        <div className="hidden blg:flex ">
          <SideBar
            sideBarOpened={props.sideBarOpened}
            setSideBarOpened={props.setSideBarOpened}
          />
        </div>
      </>
    );
  };

  return (
    <div className=" w-full min-h-screen ">
      <Navbar
        sideBarOpened={props.sideBarOpened}
        setSideBarOpened={props.setSideBarOpened}
      />
      {url === '/' && (
        <Dashboard
          sideBarOpened={props.sideBarOpened}
          setSideBarOpened={props.setSideBarOpened}
        >
          {navAndSideBar()}
        </Dashboard>
      )}
      {url === '/calendar' && <Calendar>{navAndSideBar()}</Calendar>}
    </div>
  );
};

export default MainPage;
