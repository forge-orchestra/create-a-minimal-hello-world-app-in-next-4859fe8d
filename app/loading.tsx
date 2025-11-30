import React from 'react';
import { Loader } from 'lucide-react';

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        role="status"
        aria-live="polite"
        aria-busy="true"
        className="flex flex-col items-center space-y-2"
      >
        <Loader className="animate-spin text-blue-500 w-10 h-10" />
        <span className="text-lg font-medium text-gray-700">{message}</span>
      </div>
    </div>
  );
};

export default Loading;