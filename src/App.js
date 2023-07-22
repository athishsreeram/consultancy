import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchJob from "./pages/SearchJob";
import CompanyList from "./pages/CompanyList";
import "./App.css";
import Banner from "./pages/component/bannner";

const App = () => {
  return (
    <Router>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>

      <Banner />

      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/CompanyList">CompanyList</Link>
          </li>
          <li>
            <Link to="/Company">Company</Link>
          </li>
        </ul>

        <Routes>
          <Route exact path="/" element={<SearchJob />} />
          <Route path="/CompanyList" element={<CompanyList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
