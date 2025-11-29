import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLink {
    label: string;
    href: string;
}

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks: NavLink[] = [
        { label: 'Home', href: '#' },
        { label: 'About', href: '#' },
        { label: 'Services', href: '#' },
        { label: 'Contact', href: '#' },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <nav className="bg-slate-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 font-bold text-2xl">Alex Wang</div>
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-800 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2 rounded-md hover:bg-slate-700 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    );
};

export default Navbar;