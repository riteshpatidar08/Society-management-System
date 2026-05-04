import React from 'react';
import Login from './pages/Login';


import AppRoutes from './routes/AppRoutes';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function App() {



  return (
    <div className="App">
   
      <AppRoutes />
    </div>
  );
}

export default App;
