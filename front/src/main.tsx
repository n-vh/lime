import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from '~/pages/Index';
import { SignIn } from '~/pages/SignIn';
import { Edit } from '~/pages/Edit';
import { Home } from '~/pages/Home';
import { Player } from './pages/Player';
import { SignUp } from './pages/SignUp';
import { Video } from './pages/Video';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/vod/:id" element={<Video />} />
        <Route path="/vod/:id/play" element={<Player />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
