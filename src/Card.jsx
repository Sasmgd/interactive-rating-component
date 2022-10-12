import React from 'react'
import Icon from './Icon.js'
import Text from './Text'
import Number from './Number.js'
import './card.css'
import Submit from './Submit.js'
export default function Card (props) {
    return (
        <div className='carde'>
            <div className='cards'>
                <Icon />
                <Text />
                <Number rate={props.rate} />
                <Submit submit={props.submit} />
            </div>
        </div>
    )
}
