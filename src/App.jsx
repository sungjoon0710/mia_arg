import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
  // Use the same base path as Vite
  const basename = import.meta.env.MODE === 'production' ? '/mia_arg' : '/'

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        {/* Define a route for Home */}
        <Route path="/" element={<Home />} />

        {/* Define a route for Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}