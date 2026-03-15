
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { TestPage } from "./pages/test.jsx";
import AdminPage from "./pages/adminPage";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage.jsx";
import { Toaster } from "react-hot-toast";


function App() {


  return (
    <BrowserRouter>
      <div className="w-full h-[100vh]">
        <Toaster position="top-right" />

        <Routes >
          <Route path="/*" element={<HomePage />} />
          <Route path="/register" element={<h1>Register page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/test" element={<TestPage />} />

        </Routes>

      </div>

    </BrowserRouter>


  )
}

export default App
