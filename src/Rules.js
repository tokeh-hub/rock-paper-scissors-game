import React from 'react'
import rule from './img/image-rules.svg'
import { MdClose } from 'react-icons/md'
export default function Rules({ rules, setRules }) {
    console.log(rules)
    return (
        <>
            {rules ?
                <div className='overlay'>
                    <div className='rules'>
                        <div className='rule-header'>
                            <h3>RULES</h3>
                            <button className='cancel' onClick={() => setRules(false)}><MdClose /></button>
                        </div>
                        <img src={rule} alt='rule'></img>
                    </div></div> : null}
        </>
    )
}
