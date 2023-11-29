import { useState, useEffect, FormEvent } from 'react';
import axios, { AxiosError } from 'axios';
import Layout from '../components/layouts/Layout';
import Link from 'next/link';

interface FormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [publicKey, setPublicKey] = useState<CryptoKey | null>(null);

  useEffect(() => {
    async function fetchPublicKey() {
      try {
        const response = await axios.get('/api/getPublicKey');
        if (response.status === 200) {
          const publicKey = await importPublicKey(response.data.publicKey);
          setPublicKey(publicKey);
        } else {
          console.error('Failed to fetch public key');
        }
      } catch (error) {
        console.error('Error fetching public key:', error);
      }
    }
  
    fetchPublicKey();
  }, []);
  
  const importPublicKey = async (keyString: string): Promise<CryptoKey> => {
    const keyData = keyString.replace('-----BEGIN PUBLIC KEY-----', '')
                            .replace('-----END PUBLIC KEY-----', '')
                            .replace(/\n/g, '');
  
    const binaryKey = window.atob(keyData);
    const arrayBuffer = new ArrayBuffer(binaryKey.length);
    const uint8Array = new Uint8Array(arrayBuffer);
  
    for (let i = 0; i < binaryKey.length; i++) {
      uint8Array[i] = binaryKey.charCodeAt(i);
    }
  
    const publicKey = await window.crypto.subtle.importKey(
      'spki',
      uint8Array,
      { name: 'RSA-OAEP', hash: 'SHA-256' },
      true,
      ['encrypt']
    );
  
    return publicKey;
  };

  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("test");

    try {
      console.log('sending password for encryption');
      const encryptedPassword = await encryptPassword(formData.password, publicKey); // Pass publicKey

      const response = await axios.post('/api/login', {
        email: formData.email,
        password: encryptedPassword,
      });
      console.log(response.data);

    } catch (error) {
      handleAxiosError(error as AxiosError);
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
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const encryptPassword = async (password: string, publicKey: CryptoKey | null): Promise<string> => {
    try {
      if (!publicKey) {
        throw new Error('Public key not available');
      }
      const passwordBuffer = new TextEncoder().encode(password);
  
      const encryptedData = await window.crypto.subtle.encrypt(
        { name: 'RSA-OAEP' },
        publicKey,
        passwordBuffer
      );
  
      const encryptedPassword = btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(encryptedData))));
  
      return encryptedPassword;
    } catch (error) {
      console.error('Encryption failed:', error);
      throw new Error('Encryption failed');
    }
  };

  return (
    <div>
      <h1 className="font-heading text-4xl">Login</h1>
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
      <div>
        <p>Don&#39;t have an account? <Link href="/register">Sign Up</Link></p>
      </div>
    </div>
  );
}

LoginPage.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
