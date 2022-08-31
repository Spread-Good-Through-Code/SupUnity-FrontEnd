import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import LoggedInPage from "pages/LoggedIn";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="logged-in" element={<LoggedInPage />} />
    </Routes>
  );
}

export default App;
