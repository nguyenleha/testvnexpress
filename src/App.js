import './App.scss';
import Header from './Nav/Header';
import Nav from './Nav/Nav';
import Page from './view/page';
import Aa from './view/page2';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-header header">
          <Header />
        </div>
        <div className="topnav">
          <Nav />
        </div>
        <div className="container">
          <Routes>
            <Route path='/' exact element={<Page />} />
            <Route path='/Page' element={<Aa />} />
          </Routes> </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
