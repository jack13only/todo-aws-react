import Container from '@mui/material/Container';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '..';
import './Layout.scss';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Container fixed>
        <Outlet />
      </Container>
    </>
  );
};

export { Layout };
