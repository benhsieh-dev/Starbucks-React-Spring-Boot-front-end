import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import Navbar from "./layout/Navbar";
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Starbucks Coffee Company</title>
        <link rel="canonical" href="http://www.starbucks.com" />
      </Helmet>
      <Navbar />
      <Menu />
    </div>
  );
}

export default App;
