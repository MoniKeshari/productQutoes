import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
         
          <Route
            path="/"
            element={<Home />
           }
          />
          
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
