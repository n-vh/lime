import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from '~/pages/Index';
import { Navbar } from '~/components/Navbar';
import { Card } from '~/components/Card';
import { SignIn } from '~/pages/SignIn';
import { UserModification } from '~/pages/UserModification';
import { PageShowAll } from '~/pages/PageShowAll';
import { PlayerPage } from './pages/PlayerPage';
import './index.css';
import { SignUp } from './pages/SignUp';
import { FilmShowsOne } from './pages/FilmShowsOne';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/FilmShowsOne" index element={<FilmShowsOne />} />
        <Route path="/" index element={<Index />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<UserModification />} />
        <Route path="/show" element={<PageShowAll />} />
        <Route path="/player" element={<PlayerPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
