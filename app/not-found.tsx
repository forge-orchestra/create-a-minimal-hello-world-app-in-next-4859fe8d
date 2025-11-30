import React from 'react';
import { AlertCircle } from 'lucide-react';

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <AlertCircle className="w-16 h-16 text-red-500" aria-hidden="true" />
      <h1 className="text-3xl font-bold text-gray-800 mt-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2 text-center">
        Sorry, the page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Go back to home"
      >
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;