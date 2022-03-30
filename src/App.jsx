import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './layout/GlobalStyle';

import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage';
import HomePage from "./pages/HomePage";
import HabitsPage from './pages/HabitsPage';
import HistoricPage from "./pages/HistoricPage";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        {console.log("Entrei no Router")}
        <Route path='/' element={<LoginPage/>}  />
        <Route path="/cadastro" element={<RegisterPage/>} />
        <Route path='/hoje' element={<HomePage/>} />
        <Route path='/habitos' element={<HabitsPage/>} />
        <Route path='/historico' element={<HistoricPage/>} />
      </Routes>
    </BrowserRouter>
  );
}