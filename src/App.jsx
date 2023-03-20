import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppProvider from './context/AppProvider'
import LoginPage from "./pages/LoginPage"
import SingupPage from "./pages/SingupPage"
import HabitsPage from "./pages/HabitsPage"
import TodayPage from "./pages/TodayPage";
import HistoryPage from "./pages/HistoryPage"


export default function App() {


  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={< SingupPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter >
    </AppProvider>
  );
}
