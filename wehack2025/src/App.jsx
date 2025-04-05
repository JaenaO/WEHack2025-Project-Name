import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tamagotchi from './pages/Tamagotchi';
import Investment from './pages/Investment';
import Profile from './pages/Profile';
import About from './pages/About';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Tamagotchi />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Navbar />
    </div>
  );
}

export default App;