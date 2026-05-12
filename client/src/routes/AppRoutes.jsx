import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../component/Dashboard';
import ProtectedRoutes from '../component/ProtectedRoutes';
import OpenRoutes from '../component/OpenRoutes';
import ManageUsers from '../component/ManageUsers';
import Stats from '../component/Stats';

import { useSelector } from 'react-redux';

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
            <Route path="flats" element={<ManageUsers />} />
            <Route path="staff" element={<ManageUsers />} />
            <Route path="complaints" element={<ManageUsers />} />
            <Route path="notices" element={<ManageUsers />} />

          
            <Route path="my-flat" element={<ManageUsers />} />
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
