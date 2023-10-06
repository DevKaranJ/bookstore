import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BooksPage from './components/Books';
import Categories from './components/Categories';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
