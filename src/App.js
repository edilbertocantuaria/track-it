import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import AppProvider from './context/AppProvider'
import LoginPage from "./components/LoginPage"
import SingupPage from "./components/SingupPage"
import HabitsPage from "./components/HabitsPage"
import TodayPage from "./components/TodayPage";
import HistoryPage from "./components/HistoryPage"


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
