import './App.css';
import Login from './pages/auth/Login';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Register from './pages/auth/Register';
import { useState } from 'react';

import Reset from './pages/auth/Reset';

function App() {
  const [sideBarOpened, setSideBarOpened] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {' '}
        <Route path="/login" element={<Login />} />
        <Route
          path="/dash"
          element={
            <MainPage
              sideBarOpened={sideBarOpened}
              setSideBarOpened={setSideBarOpened}
              url="/dash"
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
