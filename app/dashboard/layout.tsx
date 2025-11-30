import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Home, User } from 'lucide-react';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Forge App Dashboard',
  description: 'Dashboard layout for Forge App using Forge UI components',
};

interface LayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Forge App</h1>
        <nav className="flex space-x-4">
          <a href="/dashboard" className="flex items-center space-x-2">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </a>
          <a href="/profile" className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>Profile</span>
          </a>
        </nav>
      </header>
      <main className="flex-grow p-4">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} Forge App. All rights reserved.
      </footer>
    </div>
  );
};

export default DashboardLayout;