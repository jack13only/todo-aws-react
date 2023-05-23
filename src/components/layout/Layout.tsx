import Container from '@mui/material/Container';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

const Layout: FC = () => {
  return (
    <>
      <div className="header"></div>
      <Container fixed>
        <Outlet />
      </Container>
      <div className="footer"></div>
    </>
  );
};

export { Layout };
