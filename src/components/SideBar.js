import { Badge, Sidebar } from 'flowbite-react';
import {
  HiChartPie,
  HiCalendar,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiArrowSmRight,
  HiTable,
  HiChat,
  HiLogout,
} from 'react-icons/hi';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../api/auth/functions';
import { logout } from '../api/auth/functions';
import { useNavigate } from 'react-router-dom';

const SideBar = (props) => {
  const { sideBarOpened, setSideBarOpened } = props;
  const [user] = useAuthState(auth);
  const navigation = useNavigate();
  return (
    <div
      className={`w-fit  relative top-0 left-0 h-full ${
        sideBarOpened ? 'hidden md:block' : 'hidden'
      }`}
    >
      <Sidebar aria-label="Sidebar with call to action button example ">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/calendar" icon={HiCalendar}>
              Calendar
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiChat}>
              Chat
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Profile
            </Sidebar.Item>
            {user ? (
              <Sidebar.Item href="#" icon={HiLogout} onClick={logout}>
                Sign Out
              </Sidebar.Item>
            ) : (
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
            )}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <Sidebar.CTA>
          <div className="mb-3 flex items-center">
            <Badge color="warning">Beta</Badge>
            <button
              aria-label="Close"
              className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-blue-50 p-1 text-blue-900 hover:bg-blue-200 focus:ring-2 focus:ring-blue-400 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
              type="button"
            >
              <svg
                aria-hidden={true}
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <p className="mb-3 text-sm text-blue-900 dark:text-blue-400">
            Preview the new Flowbite dashboard navigation! You can turn the new
            navigation off for a limited time in your profile.
          </p>
          <a
            className="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            href="#"
          >
            Turn new navigation off
          </a>
        </Sidebar.CTA>
      </Sidebar>
    </div>
  );
};

export default SideBar;
