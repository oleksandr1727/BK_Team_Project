import React, { useState } from 'react';
import AppLayout from './components/AppLayout';
import { Route, Routes } from 'react-router-dom';
import FootballList from './components/FootballList';

const App = () => {

  return (
    <Routes>
      <Route path='/'element={<AppLayout />}>
      <Route index element={<p>Головна сторінка</p>}/>
      <Route path='/Football'element={<FootballList/>}/>
      <Route path='/Basketball'element={<p>Баскетбол</p>}/>
      </Route>
    </Routes>
  );
};
export default App;