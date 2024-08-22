
import './App.css';
import Header from  './components/Header';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

import Auctions from './components/Auctions';
import AuctionHouses from './components/AuctionHouses';
import Footer from './components/Footer';
import ItemListView from './components/ItemsListView'

function App() {
  return (
    <Router>
    <div className="App">
      <main>
        <Header />
       
     
        <Routes>

          <Route path="/Auctions" element={<Auctions/>} />
          <Route path="/AuctionHouses" element={<AuctionHouses/>} />




          <Route path="/ItemListView" element={<ItemListView/>} />
          
        </Routes>

        <Footer />
        </main>
    </div>
    </Router>
  );
}

export default App;
