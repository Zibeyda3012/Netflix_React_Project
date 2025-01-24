import { BrowserRouter, Routes,Route } from "react-router-dom"
import Landing from "./pages/landing/Landing"
import { useState } from "react"
import "./locales/i18next" 
import { useStore } from "zustand";
import SignUp from "./pages/signup/SignUp"
import Login from "./pages/login/Login"
import NotFound from "./common/FormInput"
import Homepage from "./pages/homepage/Homepage"
import Details from "./pages/details/Details"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { themeStore } from "common/Store.js"


function App() {
  const [count, setCount] = useState(0)
  const { token } = useStore(themeStore)

  return (
    <div className="mx-auto h-full min-h-screen w-full transition duration-300 ease-in-out overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          {token &&
            <>
              <Route path="/home" element={<Homepage />} />
              <Route path="/details" element={<Details />} />
            </>
          }
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default App
