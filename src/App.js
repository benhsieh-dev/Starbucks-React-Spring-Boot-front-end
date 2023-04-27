import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import Navbar from "./layout/Navbar";
import Menu from "./pages/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddDrink from "./drinks/AddDrink";
import EditDrink from "./drinks/EditDrink";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Starbucks Coffee Company</title>
        <link rel="canonical" href="http://www.starbucks.com" />
      </Helmet>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route exact path="/adddrink" element={<AddDrink />} />
          <Route exact path="/editdrink/:id" element={<EditDrink />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
