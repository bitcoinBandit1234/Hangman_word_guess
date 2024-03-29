import { useState } from "react"

export function Message(props){

const word = props.wordToGuess;

const guessedLetters = props.guessedWords;

return(
    <div style={{display:"flex", gap:".25em", fontSize:"6rem", fontWeight:"bold", textTransform:"uppercase", fontFamily:"monospace"}}>
        {word.split("").map((letter, index)=>{
            return(
            <span style={{borderBottom: ".1em solid black"}} key={index}>
                <span style={{visibility:guessedLetters.includes(letter)?"visible":"hidden"}}>
                    {letter}
                </span>
            </span>
            )
        })}
    </div>
);
}