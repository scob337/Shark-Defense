import React from 'react'
import './services.css'
import Service7 from '../../imgs/training.png'
import CardGroup from '../Card/CardGroup'



export default function service6() {
    return (
        <div>
            <div className="text-container-service ">
                <div className="container text bg">
                    <p><span>Homepage/</span> our partners</p>
                    <h2>our partners</h2>
                </div>
                <div className="text-content ">
                    <div className="container">
                        <img className='service-img' src={Service7} alt='' />
                        <h2 className='card-titles'>our partners</h2>
                        <CardGroup />
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
