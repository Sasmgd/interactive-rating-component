import React from 'react'
import './number.css'
export default function Number(props) {
    function click(event) {
        document.querySelectorAll('.num').forEach((cir) => {
            cir.removeAttribute('id')
        })
        event.target.id = 'active'
    }
    return (
        <div className='number'>
            <div className='num' onClick={(event) => { click(event); props.rate(1) }} style={{ pointerEvents: props.events }}>1</div>
            <div className='num' onClick={(event) => { click(event); props.rate(2) }} style={{ pointerEvents: props.events }}>2</div>
            <div className='num' onClick={(event) => { click(event); props.rate(3) }} style={{ pointerEvents: props.events }}>3</div>
            <div className='num' onClick={(event) => { click(event); props.rate(4) }} style={{ pointerEvents: props.events }}>4</div>
            <div className='num' onClick={(event) => { click(event); props.rate(4) }} style={{ pointerEvents: props.events }}>5</div>
        </div>
    )
}
