import './App.css';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="navbar">
          <h1 className="heading">Math Magicians</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/quotes">Quote</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
