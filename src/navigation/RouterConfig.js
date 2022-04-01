import React from 'react';
import {Route, Routes} from 'react-router-dom';
// Header in all pages
import Header from './layout/Header';
// pages
import Home from '../pages/Home/Home';

const RouterConfig = props => {
    return(
        <>
            <Header />
            <Routes>
                <Route path='/home' element={<Home />} /> 
            </Routes>
        </>
    )
}

export default RouterConfig;