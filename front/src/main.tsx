import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from '~/pages/LandingPage';
import { SignUp1 } from '~/pages/SignUp1';
import { SignUp2 } from '~/pages/SignUp2';
import { SignUp3 } from '~/pages/SignUp3';
import { SignUp4 } from '~/pages/SignUp4';
import { SignUp5 } from '~/pages/SignUp5';

// import Form from '~/components/Form';
// import Header from '~/components/SignInHeader';

// import { Navbar } from '~/components/Navbar';
// import { Card } from '~/components/Card';
// import { Sign } from '~/pages/Sign';
import './index.css';
// import { Password } from './pages/Password';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Form /> */}
      {/* <Input /> */}
      {/* <Navbar /> */}
      <Index />
      {/* <SignUp1 /> */}
      {/* <SignUp2 /> */}
      {/* <SignUp3 /> */}
      {/* <SignUp4 /> */}
      {/* <SignUp5 /> */}

      <Routes>
        {/* <Route path="/sign" element={<Sign />} />
        <Route path="/password" element={<Password />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
