import React from 'react'
import Mobile from './imge/illustration-thank-you.svg'
import './result.css'
export default function Result(props) {
    return (
        <div className='result'>
            <div className='res'>
                <img src={Mobile} alt="" />
                <p className='selected'>You selected {props.rate} out of 5</p>
                <h2>Thank you!</h2>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
        </div>
    )
}
