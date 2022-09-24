import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<SignUp/>}/>
          <Route path="/login" element={<SignIn/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
