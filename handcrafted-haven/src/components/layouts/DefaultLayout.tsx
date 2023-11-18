import React, { ReactNode } from 'react';

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="default-layout">
      {/* Your layout structure */}
      {children}
    </div>
  );
};

export default DefaultLayout;
