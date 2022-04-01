import React from 'react';
//Router configurations
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RouterConfig from './navigation/RouterConfig';
//global styles
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<RouterConfig />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
