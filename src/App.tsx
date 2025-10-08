import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Powered from "./component/Powered";
import Footer from "./pages/Footer";
import Steps from "./pages/Steps";

function App() {
  return (
    <Router>
      <Powered />
      <Routes>
        {/* Home route with Footer */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        {/* Steps route without Footer */}
        <Route path="/steps" element={<Steps />} />
      </Routes>
    </Router>
  );
}

export default App;
