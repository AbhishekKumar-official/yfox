import React, { Component } from 'react'
import advimg from '../../images/adv-1.png'
import './Swap.scss'

class Swap extends Component {
    render() {
        return (
            <div className="swap-container">
                <div className="adv-img-container">
                    <img src={advimg} />
                </div>
                <div className="wallet-container">
                    <div className="wallet-picker">
                
                    </div>
                </div>
            </div>
        )
    }
}
export default Swap