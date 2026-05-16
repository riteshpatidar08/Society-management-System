import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../component/Dashboard';
import ProtectedRoutes from '../component/ProtectedRoutes';
import OpenRoutes from '../component/OpenRoutes';
import ManageUsers from '../component/ManageUsers';
import Stats from '../component/Stats';

import { useSelector } from 'react-redux';
import ManageFlat from '../pages/ManageFlat';
import ManageComplaints from '../pages/ManageComplaints';
import ManageNotices from '../pages/ManageNotices';
import MyFlat from '../pages/MyFlat';

const RoleBasedIndex = () => {
  const { role } = useSelector((state) => state.auth);
  if (role?.toLowerCase() === 'admin') return <Stats />;
  return <ManageUsers />;
};

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<OpenRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />}>
         
            <Route index element={<RoleBasedIndex />} />
            
           
            <Route path="stats" element={<Stats />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="flats" element={<ManageFlat/>} />
            <Route path="staff" element={<ManageUsers />} />
            <Route path="complaints" element={<ManageComplaints />} />
            <Route path="notices" element={<ManageNotices />} />

          
            <Route path="my-flat" element={<MyFlat/>} />
            <Route path="payments" element={<ManageUsers />} />
            <Route path="my-complaints" element={<ManageUsers />} />
          
            <Route path="visitors" element={<ManageUsers />} />
            <Route path="deliveries" element={<ManageUsers />} />
            <Route path="parking" element={<ManageUsers />} />
            <Route path="emergency" element={<ManageUsers />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
