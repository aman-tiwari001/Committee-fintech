import { useState } from 'react';
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Signup = () => {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prepare data to send
    const data = {
      name,
      email,
      phone,
      password,
    };

    try {
      const response = await axios.post(
        'http://localhost:4000/auth/signup',
        data
      ); // Replace with your backend API endpoint
      console.log('Registered successful:', response.data);
      navigate('/login');
      toast.success('User registered!');
      // Handle successful login (e.g., redirect to another page)
    } catch (error) {
      toast.error(error.response.data);
      console.error('Login error:', error.response.data.error);
      // Handle login errors (e.g., display error message)
    }
    //  finally {
    //   setname('');
    //   setEmail('');
    //   setPhone('');
    //   setPassword('');
    // }
  };

  return (
    <div className='min-h-full h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-md w-full space-y-8 rounded-lg shadow-md bg-white px-8 py-12'>
        <h1 className='text-2xl font-bold text-gray-900 text-center'>
          Create your account
        </h1>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='rounded-md shadow-sm'>
            <input
              id='name'
              name='name'
              type='text'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='Name'
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>

          <div className='rounded-md shadow-sm'>
            <input
              id='email'
              name='email'
              type='email'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='rounded-md shadow-sm'>
            <input
              id='phone'
              name='phone'
              type='phone'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='Phone number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className='rounded-md shadow-sm'>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
              />
              <label
                htmlFor='remember-me'
                className='ml-2 block text-sm text-gray-700'
              >
                Remember me
              </label>
            </div>
            <a href='#' className='text-sm text-blue-600 hover:text-blue-500'>
              Forgot password?
            </a>
          </div>
          <button
            type='submit'
            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            Sign in
          </button>
            <a href='/login' className='text-sm text-blue-600 hover:text-blue-500'>
              Already have an account? Login
            </a>
        </form>
      </div>
    </div>
  );
};

export default Signup;
