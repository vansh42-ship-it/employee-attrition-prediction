import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { Page } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export default function Layout({ children, currentPage, onPageChange }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-8">
            <span 
              className="text-xl font-extrabold tracking-tighter text-primary font-headline cursor-pointer"
              onClick={() => onPageChange('home')}
            >
              Predictive Insights
            </span>
            <nav className="hidden md:flex items-center space-x-6">
              {[
                { id: 'home', label: 'Home' },
                { id: 'predict', label: 'Predict' },
                { id: 'results', label: 'Results' },
                { id: 'about', label: 'About' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id as Page)}
                  className={`font-medium transition-colors duration-200 pb-1 border-b-2 ${
                    currentPage === item.id
                      ? 'text-primary border-primary font-bold'
                      : 'text-on-surface-variant border-transparent hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-surface-container-high transition-colors duration-200 rounded-full text-on-surface-variant">
              <Bell size={20} />
            </button>
            <button className="p-2 hover:bg-surface-container-high transition-colors duration-200 rounded-full text-on-surface-variant">
              <Settings size={20} />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant/15 cursor-pointer">
              <img 
                alt="User profile" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaP8xOj54w_ExgW5n9es_yPF1qkVoA7C2EqFmCO21nyzgwlrVraIgagP4j1c_36hwh4qlwljq6eDRsSYfUsbutUE8qQj0X_APu94THKdBKHM-swV4MiGXQh65iBUVjk_G-hAN5cV_V82bIIaxsqR517jFg5C6x8BosJB-ixQTLWAwjLc8Or8B_KTjDFJJ3RQ5iurtZn657JFxLqsV4JSHGHrGTK_elF3jytxIYPUC13GJFBemAUd91E6XAZXyLE7O3GGwnb3Dn86c"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="w-full py-12 px-8 bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-headline font-bold text-on-surface">Predictive Modeling Project</span>
            <p className="text-sm text-on-surface-variant">© 2024 Predictive Modeling Project. Designed for Insights.</p>
          </div>
          <nav className="flex gap-8">
            <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Documentation</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
