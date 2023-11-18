import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
