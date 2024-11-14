import React from 'react';

const Navbar: React.FC<{ transparent?: boolean }> = ({ transparent }) => {
  return (
    <nav className={`relative flex flex-wrap items-center justify-between px-2 py-3 ${transparent ? 'bg-transparent' : 'bg-white'} mb-3`}>
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
          <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase" href="/">
            Trustavo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
