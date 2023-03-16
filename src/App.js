import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage"
import SingupPage from "./components/SingupPage"
import HabitsPage from "./components/HabitsPage"
import TodayPage from "./components/TodayPage";
import HistoryPage from "./components/HistoryPage"


export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/hoje" element={<TodayPage/>}/>
        <Route path="/cadastro" element={< SingupPage />}/> 
        
        {/* <Route path="/" element={<LoginPage />}/>
        
        <Route path="/habitos" element={<HabitsPage/>}/>
         
        <Route path="/historico" element={<HistoryPage/>}/>*/}

      </Routes>
    </BrowserRouter >
  );
}
