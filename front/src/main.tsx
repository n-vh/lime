import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from '~/pages/Index';
// import { Navbar } from '~/components/Navbar';
// import Form from '~/components/Form';
import Header from '~/components/SignInHeader';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Form /> */}
      {/* <Input /> */}
      {/* <Navbar /> */}
      <Routes>
        {/* <Route index element={<Index />} />
        <Route path="/index" element={<Index />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
