import { BrowserRouter, Routes, Route } from "react-router-dom";

import Books from "./components/Books";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
