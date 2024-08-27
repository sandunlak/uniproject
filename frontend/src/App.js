
import './App.css';
import Header from  './components/Header';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

import Auctions from './components/Auctions';
import AuctionHouses from './components/AuctionHouses';
import Footer from './components/Footer';


import ItemListPage from '../src/components/ItemListPage';
import CreateItemListing from './components/CreateItemListing';

import Arts from './components/Arts';
import Jewellery from './components/Jewellery';
import Collectibles from './components/Collectibles';
import SellerSignUp from './components/SellerSignUp';
import ChooseRole from './components/BidderOrSeller';

function App() {
  return (
    <Router>
    <div className="App">
      <main>
        <Header />
       
     
        <Routes>

          <Route path="/Auctions" element={<Auctions/>} />
          <Route path="/AuctionHouses" element={<AuctionHouses/>} />
          <Route path="/ItemListView" element={<ItemListPage/>} />
          <Route path="/AddItems" element={<CreateItemListing/>} />
          
          <Route path="/Arts" element={<Arts/>}/>
          <Route path="/Jewellery" element={<Jewellery/>}/>
          <Route path="/Collectibles" element={<Collectibles/>}/>
          <Route path="/SellerSignUp" element={<SellerSignUp/>}/>
          <Route path="/ChooseRole" element={<ChooseRole/>}/>
        </Routes>

        <Footer />
        </main>
    </div>
    </Router>
  );
}

export default App;
