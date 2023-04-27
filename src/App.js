import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddDrink from "./drinks/AddDrink";
import EditDrink from "./drinks/EditDrink";
import ViewDrink from "./drinks/ViewDrink";
import Rewards from "./pages/Rewards/Rewards";
import GiftCards from "./pages/GiftCards/GiftCards";
import StoreLocator from "./pages/StoreLocator/StoreLocator";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/rewards" element={<Rewards />} />
          <Route exact path="/giftcards" element={<GiftCards />} />
          <Route exact path="/storelocator" element={<StoreLocator />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/adddrink" element={<AddDrink />} />
          <Route exact path="/editdrink/:id" element={<EditDrink />} />
          <Route exact path="/viewdrink/:id" element={<ViewDrink />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
