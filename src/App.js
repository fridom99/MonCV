import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Test from './pages/Test';

const App = () => {
  return (
    <>
    {/* <h3>Coucou les amis</h3> */}

    {/* <React.StrictMode>
    <Home />
  </React.StrictMode>
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode> */}

  <BrowserRouter>
    <Routes>
      <Route exact path='' element={<Home/>} />
      <Route exact path='competences' element={<Knowledges/>} />
      <Route exact path='portfolio' element={<Portfolio/>} />
      <Route exact path='contact' element={<Contact/>} />
      <Route exact path='*' element={<NotFound/>} />
      <Route exact path='test' element={<Test/>} />
    </Routes>
  </BrowserRouter>


    </>
  );
};

export default App;

