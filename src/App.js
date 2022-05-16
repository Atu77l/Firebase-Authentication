import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Calculator from './Calculator/Calculator.jsx';
import Notes from "./Notes/Notes";
import Game from "./Game/Game/Game";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path='/calculator' element={<Calculator/>} />
        <Route path='/notes' element={<Notes/>} />
        <Route path='/game' element={<Game/>}/>
        </Routes>
       
      </Router>
    </div>
  );
}
export default App;