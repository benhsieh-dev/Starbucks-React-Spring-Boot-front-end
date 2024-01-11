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
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(""); 

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
          <Route
            exact
            path="/"
            element={<Home isLoggedIn={isLoggedIn} userName={userName} />}
          />
          <Route
            exact
            path="/account"
            element={<Account isLoggedIn={isLoggedIn} userName={userName} />}
          />
          <Route
            exact
            path="/menu"
            element={<Menu isLoggedIn={isLoggedIn} userName={userName} />}
          />
          <Route
            exact
            path="/menu/drinks/hot-coffees"
            element={<HotCoffees isLoggedIn={isLoggedIn} userName={userName} />}
          />
          <Route
            exact
            path="/rewards"
            element={<Rewards isLoggedIn={isLoggedIn} userName={userName} />}
          />
          <Route
            exact
            path="/giftcards"
            element={<GiftCards isLoggedIn={isLoggedIn} userName={userName} />}
          />
          <Route
            exact
            path="/storelocator"
            element={
              <StoreLocator isLoggedIn={isLoggedIn} userName={userName} />
            }
          />
          <Route
            exact
            path="/signin"
            element={<SignIn isLoggedIn={isLoggedIn} userName={userName} />}
          />
          <Route
            exact
            path="/account/create"
            element={<JoinNow isLoggedIn={isLoggedIn} userName={userName} />}
          />
          <Route
            exact
            path="/adddrink"
            element={<AddDrink isLoggedIn={isLoggedIn} userName={userName} />}
          />
          <Route
            exact
            path="/editdrink/:id"
            element={<EditDrink isLoggedIn={isLoggedIn} userName={userName} />}
          />
          <Route
            exact
            path="/viewdrink/:id"
            element={<ViewDrink isLoggedIn={isLoggedIn} userName={userName} />}
          />
          <Route
            exact
            path="/account/create"
            element={<Register isLoggedIn={isLoggedIn} userName={userName} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
