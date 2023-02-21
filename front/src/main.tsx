import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from '~/pages/LandingPage';
import { Navbar } from '~/components/Navbar';
import { Card } from '~/components/Card';
import { Sign } from '~/pages/Sign';
import { UserModification } from '~/pages/UserModification';
import { PageShowAll } from '~/pages/PageShowAll';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Index />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/user" element={<UserModification />} />
        <Route path="showall" element={<PageShowAll />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
