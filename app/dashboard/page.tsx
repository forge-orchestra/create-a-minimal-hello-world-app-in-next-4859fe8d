'use client';

import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { fetchUserData } from '@/lib/api'; // Assume this is a utility to fetch user data
import { AlertCircle } from 'lucide-react';
import 'tailwindcss/tailwind.css';

interface UserData {
  id: number;
  name: string;
  email: string;
}

const DashboardPage: NextPage = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (err) {
        setError('Failed to load user data.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        <AlertCircle className="mr-2" />
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="w-full p-4">
            <h1 className="text-2xl font-bold text-gray-900">Hello, {userData?.name}!</h1>
            <p className="text-gray-600">Email: {userData?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;