import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

type LayoutProps = {
  children: ReactNode;
  isLoggedIn?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, isLoggedIn = false  }) => {
  return (
    <div className="layout min-h-screen bg-sandstone">
      <Header isLoggedIn={isLoggedIn}></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
