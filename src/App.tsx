import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Layout } from './components/layout/Layout';
import { PATHS } from './shared/routes';
import { ChartJs, Todos } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path={PATHS.todos} element={<Layout />}>
        <Route index element={<Todos />} />
        <Route path={PATHS.chartJs} element={<ChartJs />} />
      </Route>
    </Routes>
  );
};

export default App;
