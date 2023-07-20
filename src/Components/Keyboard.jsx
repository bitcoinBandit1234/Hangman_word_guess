import "./keyboard.css";

export function Keyboard(props){

    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    return(
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(75px, 1fr))", gap:".5rem"}}>
            {alphabets.map((letter)=>{
                    const isActive = props.activeLetters.includes(letter);
                    const isInactive = props.inactiveletters.includes(letter);
                return(
                    <button disabled={isActive || isInactive} className={`btn ${isActive? 'active':""} ${isInactive? 'inactive':""}`} onClick={()=>props.addGuessedLetter(letter)} style={{border:".1em solid black", flexBasis:"50%"}} key={letter}>
                        {letter}
                    </button>
                );
            })}
        </div>
    )
}