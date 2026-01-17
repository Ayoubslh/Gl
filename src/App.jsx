import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Chapter1 from './pages/Chapter1/Chapter1';
import Chapter2 from './pages/Chapter2/Chapter2';
import Chapter3 from './pages/Chapter3/Chapter3';
import Chapter4 from './pages/Chapter4/Chapter4';
import Chapter5 from './pages/Chapter5/Chapter5';
import Chapter6 from './pages/Chapter6/Chapter6';
import Chapter7 from './pages/Chapter7/Chapter7';
import Chapter8 from './pages/Chapter8/Chapter8';
import Quiz from './pages/Quiz/Quiz';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapter1" element={<Chapter1 />} />
          <Route path="/chapter2" element={<Chapter2 />} />
          <Route path="/chapter3" element={<Chapter3 />} />
          <Route path="/chapter4" element={<Chapter4 />} />
          <Route path="/chapter5" element={<Chapter5 />} />
          <Route path="/chapter6" element={<Chapter6 />} />
          <Route path="/chapter7" element={<Chapter7 />} />
          <Route path="/chapter8" element={<Chapter8 />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
