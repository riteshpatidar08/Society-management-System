import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../component/Dashboard';
import ProtectedRoutes from '../component/ProtectedRoutes';
import OpenRoutes from '../component/OpenRoutes';
import ManageUsers from '../component/ManageUsers';
import Stats from '../component/Stats';

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<OpenRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} >
          <Route path='stats'  element={<Stats/>}></Route>
          <Route path="users" element =  {<ManageUsers/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
