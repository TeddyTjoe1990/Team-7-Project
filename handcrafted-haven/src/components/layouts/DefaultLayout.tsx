import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

type DefaultLayoutProps = {
  children: ReactNode;
  isLoggedIn?: boolean;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, isLoggedIn = false }) => {
  return (
    <div className="default-layout">
      <Header isLoggedIn={isLoggedIn}></Header>
      {/* Your layout structure */}
      {children}
      <Footer></Footer>
    </div>
  );
};

export default DefaultLayout;
