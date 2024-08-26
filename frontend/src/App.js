
import './App.css';
import Header from  './components/Header';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

import Auctions from './components/Auctions';
import AuctionHouses from './components/AuctionHouses';
import Footer from './components/Footer';


import ItemListPage from '../src/components/ItemListPage';
import CreateItemListing from './components/CreateItemListing';
import DisplayData from './components/DisplatData';

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
          <Route path="/items" element={<DisplayData />} />





         
          
        </Routes>

        <Footer />
        </main>
    </div>
    </Router>
  );
}

export default App;
