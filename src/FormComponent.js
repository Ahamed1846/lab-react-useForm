import { useForm } from 'react-hook-form';
import './formComponent.css';

function Form(){
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit=(data)=>{
    console.log(data)
    document.getElementById('message').style.display='block'
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <p id='message'>Registeration succesfull!</p>
      <div>
        <input
          type="text"
          id="firstName"
          placeholder='First Name'
          {...register('firstName', { required: true })}
        />
        {errors.firstName && <p>First Name is required</p>}
      </div>
      <div>
        <input
          type="text"
          id="lastName"
          placeholder='Last Name'
          {...register('lastName', { required: true })}
        />
        {errors.lastName && <p>Last Name is required</p>}
      </div>
      <div>
        <input
          type="email"
          id="email"
          placeholder='Email'
          {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
        />
        {errors.email?.type === 'required' && <p>Email is required</p>}
        {errors.email?.type === 'pattern' && <p>Invalid email</p>}
      </div>
      <div>
        <input
          type="password"
          id="password"
          placeholder='Password'
          {...register('password', { required: true, minLength: 5, maxLength: 20 })}
        />
        {errors.password?.type === 'required' && <p>Password is required</p>}
        {errors.password?.type === 'minLength' && <p>Password must be more<br/>than 4 characters</p>}
        {errors.password?.type === 'maxLength' && <p>Password cannot be more<br/>than 20 characters</p>}
      </div>
      <button type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
    </form>
  );
};

export default Form;
