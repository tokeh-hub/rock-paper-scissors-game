import React from 'react'
import logo from './img/logo.svg'
export default function Header({ score }) {

    return (
        <div className='header'>
            <img className='logo' src={logo} alt='logo'></img>
            <div className='score'>
                <p>Score</p>
                <h2 className='number'>{score}</h2>
            </div>
        </div>
    )
}
