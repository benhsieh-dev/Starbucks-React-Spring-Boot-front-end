import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./navbar/Splash/Navbar";
import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";
import Menu from "./pages/Menu/Menu";
import HotCoffees from "./pages/Menu/HotCoffees/HotCoffees";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddDrink from "./drinks/AddDrink";
import EditDrink from "./drinks/EditDrink";
import ViewDrink from "./drinks/ViewDrink";
import Rewards from "./pages/Rewards/Rewards";
import GiftCards from "./pages/GiftCards/GiftCards";
import StoreLocator from "./pages/StoreLocator/StoreLocator";
import SignIn from "./pages/SignIn/SignIn";
import JoinNow from "./pages/JoinNow/JoinNow";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Starbucks Coffee Company</title>
            <link rel="canonical" href="http://www.starbucks.com" />
          </Helmet>
        </div>
      </HelmetProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route
            exact
            path="/menu/drinks/hot-coffees"
            element={<HotCoffees />}
          />
          <Route exact path="/rewards" element={<Rewards />} />
          <Route exact path="/giftcards" element={<GiftCards />} />
          <Route exact path="/storelocator" element={<StoreLocator />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/account/create" element={<JoinNow />} />
          <Route exact path="/adddrink" element={<AddDrink />} />
          <Route exact path="/editdrink/:id" element={<EditDrink />} />
          <Route exact path="/viewdrink/:id" element={<ViewDrink />} />
          <Route exact path="/account/create" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;