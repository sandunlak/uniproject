
import './App.css';
import Header from  './components/Header';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Auctions from './components/Auctions';
import AuctionHouses from './components/AuctionHouses';

function App() {
  return (
    <Router>
    <div className="App">
      <main>
        <Header />
      </main>
        <Routes>
          <Route path="/Auctions" element={<Auctions/>} />
          <Route path="/AuctionHouses" element={<AuctionHouses/>} />

          
          <Route path="/" element={<Home/>} />
          
        </Routes>
     
    </div>
    </Router>
  );
}

export default App;
