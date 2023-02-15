import { useState } from "react";
import GuessData from "./assets/GuessData.json";
import {Drawing} from "./Components/Drawing";
import {Keyboard} from "./Components/Keyboard";
import {Message} from "./Components/Message";
import "./App.css";

function App(){
    const [wordToGuess,setWordToGuess] = useState(()=>{
        return GuessData[Math.floor(Math.random() * GuessData.length)]
    });
    const [guessedWords, setGuessedWords] = useState([]);

    return(
        <div className="container">
            <div className="title">Hangman</div>
            <Drawing/>
            <Message/>
            <Keyboard/>
        </div>
    )
}

export default App;