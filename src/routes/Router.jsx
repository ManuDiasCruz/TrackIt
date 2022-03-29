import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "../pages/HomePage";
import InitialPage from "../pages/InitialPage";
import HabitsPage from '../pages/HabitsPage';
import HistoricPage from "../pages/HistoricPage";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}  />
                <Route path="/cadastro" element={<RegisterPage/>} />
                <Route path='/hoje' element={<InitialPage/>} />
                <Route path='/habitos' element={<HabitsPage/>} />
                <Route path='/historico' element={<HistoricPage/>} />
            </Routes>
        </BrowserRouter>
        )
}