import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from '~/pages/LandingPage';
import { Navbar } from '~/components/Navbar';
import { Card } from '~/components/Card';
import { Sign } from '~/pages/Sign';
import { UserModification } from '~/pages/UserModification';
import { PageShowAll } from '~/pages/PageShowAll';
import { PlayerPage } from './pages/PlayerPage';
import './index.css';
import { PageShowAll } from './pages/PageShowAll';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Index />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/user" element={<UserModification />} />
        <Route path="/showall" element={<PageShowAll />} />
        <Route path="/player" element={<PlayerPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
