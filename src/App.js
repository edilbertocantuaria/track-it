import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage"
import SingupPage from "./components/SingupPage"
import HabitsPage from "./components/HabitsPage"


export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HabitsPage/>}/>
        {/* <Route path="/" element={<LoginPage />}/>
        <Route path="/cadastro" element={< SingupPage />}/> */}

      </Routes>
    </BrowserRouter>
  );
}
