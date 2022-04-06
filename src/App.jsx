import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import UserContext from './contexts/UserContext';
import GlobalStyle from './layout/GlobalStyle';

import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage';
import HomePage from "./pages/HomePage";
import HabitsPage from './pages/HabitsPage';
import HistoricPage from "./pages/HistoricPage";

export default function App() {
  const [token, setToken] = useState();
  return (
    <UserContext.Provider value={{token, setToken}}>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          {console.log("Entrei no Router")}
          <Route path='/' element={<LoginPage />}  />
          {console.log(`App token = ${token}`)}
          <Route path="/cadastro" element={<RegisterPage/>} />
            <Route path='/hoje' element={<HomePage />} />
            <Route path='/habitos' element={<HabitsPage />} />
            <Route path='/historico' element={<HistoricPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}