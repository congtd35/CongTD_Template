import React from 'react';
import { Route, Routes } from 'react-router-dom';
import paths from '../constants/paths.js';
import DocumentManagement from '../screen/DocumentManagement/DocumentManagement.jsx';
import Login from '../screen/Login/Login.jsx';
import Home from '../screen/Home/Home.jsx';

const Router = () => <Routes>
  <Route path={paths.login} element={<Login />} />
  <Route path={paths.home} element={<Home />} />
  <Route path={paths.documentManagement} element={<DocumentManagement />} />
</Routes>;

export default Router;