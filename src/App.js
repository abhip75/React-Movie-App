import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {Container} from '@material-ui/core';
import Header from './components/Header/Header';
import Movies from "./Pages/Movies/Movies";
import Trending from "./Pages/Trending/Trending";
import SimpleBottomNavigation from './components/MainNav';



function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="/movies" element={<Movies />} />
            
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
