import React, { useMemo } from 'react';
import Dashboard from '../components/Dashboard';
import Navbar from '../components/Navbar';
import Drawer from '../components/Drawer';
import SideBar from '../components/SideBar';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../api/auth/functions';

const MainPage = (props) => {
  const [user] = useAuthState(auth);
  const navigation = useNavigate();

  useMemo(() => {
    if (!user) navigation('/login');
  }, [user, navigation]);

  return (
    <div className=" w-full min-h-screen ">
      <Navbar
        sideBarOpened={props.sideBarOpened}
        setSideBarOpened={props.setSideBarOpened}
      />
      {props.url === '/dash' && (
        <Dashboard
          sideBarOpened={props.sideBarOpened}
          setSideBarOpened={props.setSideBarOpened}
        >
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
        </Dashboard>
      )}
    </div>
  );
};

export default MainPage;
