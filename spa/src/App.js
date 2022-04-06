import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import Items from './components/Items';
import About from './components/About';
import ProfilePage from './components/ProfilePage'

import {
  ItemsPrivateRoute,
  ProfilePagePrivateRoute,
  LogoutPrivateRoute
} from './PrivateRoutes/PrivateRoute.js'




function App() {
  return (
    <div className="App">
          <Header />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/about' element={<About/>}/>
              <Route 
              exact path='/items' 
              element={
                <ItemsPrivateRoute>
                  <Items/>
                </ItemsPrivateRoute>
              }/>
              <Route
              path='/profile'
              element={
                <ProfilePagePrivateRoute>
                  <ProfilePage/>
                </ProfilePagePrivateRoute>
              }/>
              <Route
              path='/logout/*'
              element={
                <LogoutPrivateRoute>
                  <Logout/>
                </LogoutPrivateRoute>
              }
              />
            </Routes>
    </div>
  );
}

export default App;
