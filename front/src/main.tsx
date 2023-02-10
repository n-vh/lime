import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from '~/pages/Index';
import { TestParams } from '~/components/TestParams';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="/:page" element={<TestParams />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
