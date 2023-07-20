import { useCallback, useEffect, useState } from "react";
import GuessData from "./assets/GuessData.json";
import {Drawing} from "./Components/Drawing";
import {Keyboard} from "./Components/Keyboard";
import {Message} from "./Components/Message";
import "./App.css";

function App(){

    const [wordToGuess,setWordToGuess] = useState(()=>{
        return GuessData[Math.floor(Math.random() * GuessData.length)]
    });
    console.log(wordToGuess)
    const [guessedWords, setGuessedWords] = useState([]);
    const incorrectguesses = guessedWords.filter(letter => !wordToGuess.name.includes(letter));
    const correctGuesses = guessedWords.filter(letter => wordToGuess.name.includes(letter));
    const [gameStatus, setGameStatus] = useState("Hangman");

    const addGuessedLetter = useCallback((letter)=>{
        if(guessedWords.includes(letter)) return
        setGuessedWords(currentLetters => [...currentLetters, letter])
    }, [guessedWords]);

    useEffect(()=>{
        if(incorrectguesses.length == 6){
            setGameStatus("You Lost");
        }

        if(correctGuesses.length == wordToGuess.name.length){
            setGameStatus("You Won");
        }
        console.log(correctGuesses.length + " "+ wordToGuess.name.length)
    },[guessedWords]);

    return(
        <div className="container">
            <div className="title">{gameStatus}</div>
            <Drawing totalGuesses={incorrectguesses.length}/>
            <Message wordMeaning={wordToGuess.Meaning} wordToGuess={wordToGuess.name} guessedWords={guessedWords}/>
            <div hidden={gameStatus=="You Lost" ? true : false} style={{alignSelf:"stretch"}}>
                <Keyboard activeLetters={guessedWords.filter(letter => wordToGuess.name.includes(letter))} inactiveletters={incorrectguesses} addGuessedLetter={addGuessedLetter}/>
            </div>
        </div>
    )
}

export default App;