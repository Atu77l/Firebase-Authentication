import "./Game.css";
import { useState } from "react";
import Board from "../Board/Board";
import Scores from "../Scores/Scores";
import Navbar from  "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

function Game() {
  
  const [scores, setScores] = useState({
    x: 0,
    o: 0,
    tie: 0,
  });

  return (
    <>
    <div className="main">
    <Navbar/>
    </div>
    <div className="Game">
      <Board setScores={setScores}/>
      <Scores scores={scores}/>
    </div>
    
    <Footer/>
    </>
  );
}

export default Game;
