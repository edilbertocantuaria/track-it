import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage"
import SingupPage from "./components/SingupPage"
import HabitsPage from "./components/HabitsPage"
import TodayPage from "./components/TodayPage";


export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodayPage/>}/>
        {/* <Route path="/" element={<LoginPage />}/>
        <Route path="/cadastro" element={< SingupPage />}/> 
        <Route path="/habitos" element={<HabitsPage/>}/>*/}

      </Routes>
    </BrowserRouter>
  );
}
