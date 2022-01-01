import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Result({ pick, house, setHouse, setScore }) {
    const [finished, setFinished] = useState(false)
    const [time, setTime] = useState(3)
    const list = ['rock', 'paper', 'scissors']
    const [check, setCheck] = useState(false)
    const [player, setPlayer] = useState('')


    useEffect(() => {
        var randomAnswer = list[Math.floor(Math.random() * 3)];
        setHouse(randomAnswer)
    }, []
    )


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time - 1);
        }, 1000);
        return () => clearInterval(interval)
    }, []);
    useEffect(() => {
        if (time === 0) { setFinished(true); checkResult() }
    }, [time])


    const checkResult = () => {
        setCheck(true)
        if (pick === 'scissors' && house === 'paper' || pick === 'rock' && house === 'scissors' || pick === 'paper' && house === 'rock') { setPlayer('win'); setScore(score => score + 1) }
        if (pick === 'paper' && house === 'scissors' || pick === 'scissors' && house === 'rock' || pick === 'rock' && house === 'paper') { setPlayer('lose') }
        if (pick === 'scissors' && house === 'scissors' || pick === 'rock' && house === 'rock' || pick === 'paper' && house === 'paper') { setPlayer('draw') }
    }
    return (
        <div className='result'>
            <div className='result--you'>
                <h4 >You Picked: </h4>
                <p className={`icon icon--${pick} ${player === 'win' ? `icon icon--${pick}--winner` : ''}`}></p>
            </div>
            {check ?
                <div className='result--play'>
                    {player === 'win' && <h1>You Win</h1>}
                    {player === 'lose' && <h1>You Lose</h1>}
                    {player === 'draw' && <h1>Draw!</h1>}
                    <Link to='/'>
                        <button >Play again</button>
                    </Link>
                </div>
                : null}
            <div className='result--house'>
                <h4>The house picked: </h4>
                {finished ?
                    <p className={`icon icon--${house}  ${player === 'lose' ? `icon--${house}--winner` : ''}`}></p> : <p className='time'>{time}</p>
                }
            </div>


        </div>
    )
}
