// Layout.jsx

import type { ReactNode } from "react";



type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-full  relative overflow-x-hidden">
      
      {/* Global Background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: "radial-gradient(circle at 85% 100%, #780029 0%, #0a0a0a 0%)"
        }}
      />

      {/* Page Content */}
      {children}
    </div>
  );
};

export default Layout;