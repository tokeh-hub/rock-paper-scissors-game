import React from 'react'
import { Link } from 'react-router-dom'
import triangle from './img/bg-triangle.svg'
export default function Play({ setPick, pick }) {
    const setChoice = (e) => {

        setPick(e.target.dataset.id)
        console.log(pick)
    }
    return (
        <div className='play'>
            <img className='triangle' src={triangle} alt='triangle'></img>
            <div className='icons'>
                <Link to='./result'>
                    <div data-id="paper" onClick={setChoice} className='icon  icon--paper'>

                    </div>
                </Link>
                <Link to='./result'>
                    <div data-id="scissors" onClick={setChoice} className='icon icon--scissors'>

                    </div>
                </Link>
                <Link to='./result'>
                    <div data-id="rock" onClick={setChoice} className='icon icon--rock'>

                    </div>
                </Link>
            </div>

        </div>
    )
}
