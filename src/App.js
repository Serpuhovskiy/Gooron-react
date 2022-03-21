import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect } from 'react';
import Main from './pages/MainPage';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegPage from './pages/RegPage';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { auth } from './actions/user';

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          exact
          path="/login"
          element={isAuth ? <Navigate replace to="/" /> : <LoginPage />}></Route>
      </Routes>
      {!isAuth && (
        <Routes>
          {/* <Route path="/" element={<MainPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
