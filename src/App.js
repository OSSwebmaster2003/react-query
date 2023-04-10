import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Home_page from "./components/Home.page";
import Superheroes_page from "./components/Superheroes.page";
import RQSuperheroes_page from "./components/RQSuperheroes.page";
import "./App.css";

const queryClient = new QueryClient();

function App(props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/super-heroes" element={<Superheroes_page />} />
            <Route path="/rq-super-heroes" element={<RQSuperheroes_page />} />
            <Route path="/" element={<Home_page />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
