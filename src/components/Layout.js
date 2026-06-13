import React from "react";

function Layout({ children, className = "" }) {
  return (
    <div className="w-full h-full inline-block z-0 bg-light dark:bg-dark">
      <div className={`container mx-auto px-6 lg:px-4 py-12 md:py-8 max-w-6xl ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
