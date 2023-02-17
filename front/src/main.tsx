import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from '~/pages/Index';

import Form from '~/components/Form';
import Header from '~/components/SignInHeader';

import { Navbar } from '~/components/Navbar';
import { Card } from '~/components/Card';
import { Sign } from '~/pages/Sign';
import './index.css';
import { Password } from './pages/Password';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>

      {/* <Header /> */}
      {/* <Form /> */}
      {/* <Input /> */}
      {/* <Navbar /> */}
 

      <Routes>
        <Route path="/" index element={<Index />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/password" element={<Password />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
