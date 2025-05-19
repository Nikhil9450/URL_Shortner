import Signup from './Auth/Signup';
import SignIn from './Auth/SignIn';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import './App.css';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
