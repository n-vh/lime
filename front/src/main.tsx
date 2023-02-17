import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from '~/components/Form';
import Header from '~/components/SignInHeader';
import { Navbar } from '~/components/Navbar';
import { Card } from '~/components/Card';
import { Player } from '~/components/Player';
import { Sign } from '~/pages/Sign';
import { Index } from '~/pages/Index';
import { Forgot } from '~/pages/Forgot';
import { Password } from './pages/Password';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Index />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/password" element={<Password />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
      <Player />
    </BrowserRouter>
  </React.StrictMode>,
);
