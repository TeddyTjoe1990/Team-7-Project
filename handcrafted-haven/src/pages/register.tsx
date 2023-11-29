import { useState, FormEvent } from 'react';
import axios, { AxiosError } from 'axios'; // Ensure axios is installed: npm install axios
import Layout from '../components/layouts/Layout'

interface FormData {
  email: string;
  password: string;
}

export default function Register() {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/register', formData);
      console.log(response.data);

    } catch (error) {
      handleAxiosError(error as AxiosError); // Cast 'error' to AxiosError type
    }
  };

  const handleAxiosError = (error: AxiosError) => {
    if (error.response) {
      console.error('Error status:', error.response.status);
      console.error('Error data:', error.response.data);
    } else if (error.request) {
      console.error('Request made but no response received:', error.request);
    } else {
      console.error('Error:', error.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1 className="font-heading text-4xl">Register New User</h1>
      <form className="m-3 p-3" onSubmit={handleSubmit}>
        <label>
          E-Mail Address
        </label>
        <input
          type='email'
          name='email'
          placeholder='Type your email'
          value={formData.email}
          onChange={handleChange}
        />
        <label>
          Password
        </label>
        <input
          type='password'
          name='password'
          placeholder='Type your password'
          value={formData.password}
          onChange={handleChange}
        />
        <input className="outline m-3 p-2 rounded-md hover:bg-gray-200" type='submit' value='Login' />
      </form>
    </div>
  );
}

Register.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
