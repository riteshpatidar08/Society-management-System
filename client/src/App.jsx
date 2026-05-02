import React from 'react';
import Login from './pages/Login';
import { increment } from './redux/slice/authSlice';

import AppRoutes from './routes/AppRoutes';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const {count} = useSelector((state) =>  state.counter
  );
  
  const handleIncrementClick = () => {
    dispatch(increment());
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleIncrementClick}>Increment</button>
      <button>Decrement</button>
      <AppRoutes />
    </div>
  );
}

export default App;
