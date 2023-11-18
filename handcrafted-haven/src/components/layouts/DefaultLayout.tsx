import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="default-layout">
      <Header></Header>
      {/* Your layout structure */}
      {children}
      <Footer></Footer>
    </div>
  );
};

export default DefaultLayout;
