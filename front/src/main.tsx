import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Index } from '~/pages/Index';
import { Footer } from '~/components/Footer';
import { ButtonTypes } from '~/components/ButtonTypes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Index />} /> */}
        {/* <Route path="/Footer" element={<Footer />} /> */}
        {/* <Route path="/button" element={<ButtonTypes>Button</ButtonTypes>} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
