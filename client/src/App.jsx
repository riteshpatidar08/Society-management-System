import React from 'react';
import Login from './pages/Login';
import AppRoutes from './routes/AppRoutes';
import { useForm } from 'react-hook-form';
import { Button } from './component/ui';
function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(errors);
  return (
    <div className="App">
      {/* <h1>React Hook form</h1> */}

      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <label>Firstname</label>
        <input
          name="firstname"
          type="text"
          {...register('firstname', {
            required: {
              value: true,
              message: 'Firstname is required',
            },
          })}
        />

        {errors.firstname ? (
          <p className="text-red-500 font-medium">
            {' '}
            {errors.firstname.message}
          </p>
        ) : null}

        <label>Lastname</label>
        <input
          name="lastname"
          type="text"
          {...register('lastname', {
            required: {
              value: true,
              message: 'Lastname is required',
            },
            minLength: {
              value: 3,
              message: 'atleast 3 character required',
            },
          })}
        />
        {errors.lastname ? (
          <p className="text-red-500 font-medium"> {errors.lastname.message}</p>
        ) : null}
        <Button variant="primary"> Submit</Button>
      </form> */}

      <AppRoutes />
    </div>
  );
}

export default App;


//notification module
//cloudinary module
//