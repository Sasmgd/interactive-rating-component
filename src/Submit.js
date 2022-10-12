import React from 'react'
import './submit.css'
export default function Submit(props) {
    return (
        <div >
            <button className='submit' onClick={()=>{props.submit(true)}}>SUBMIT</button>
        </div>
    )
}
