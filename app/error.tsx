import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div 
      role="alert" 
      aria-live="assertive" 
      className="flex items-center p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
    >
      <AlertCircle className="w-5 h-5 mr-2" />
      <span className="sr-only">Error:</span>
      <span>{message}</span>
    </div>
  );
};

export default Error;