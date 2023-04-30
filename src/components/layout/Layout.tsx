import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

const Layout: FC = () => {
  return (
    <>
      <div className="header"></div>
      <main className="main">
        <Outlet />
      </main>
      <div className="footer"></div>
    </>
  );
};

export { Layout };
