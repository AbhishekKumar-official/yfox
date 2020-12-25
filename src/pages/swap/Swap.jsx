import React, { Component } from 'react'
import advimg from '../../images/adv-1.png'
import ethicon from '../../images/eth-icon.png'
import advimg2 from '../../images/adv-2.png'
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
                        <div className="left-content">
                        <div className="border-box">
                            <label>From</label>
                            <div className="d-flex align-items-center">
                                <input type="text" className="form-control" placeholder="0.0"></input>
                                <button className="btn-dropdown-from">
                                <img src={ethicon} className="etch-icon" />
                                <span>ETH</span>
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" class="sc-eKZiaR bwyinG"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
                                </button>
                            </div>
                        </div>
                        <button className="btn btn-connect-wallet">Connect Wallet</button>
                        </div>
                        <button className="swap-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C3C5CB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hide-on-phone"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                        <div className="right-content">
                        <div className="border-box">
                            <label>To</label>
                            <div className="d-flex align-items-center">
                                <input type="text" className="form-control" placeholder="0.0"></input>
                                <button className="btn btn-token">
                                Select a Token
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" class="sc-eKZiaR bwyinG"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
                                </button>
                            </div>
                        </div>
                        <button className="btn btn-connect-wallet bg-transparent">&nbsp;</button>
                        </div>
                    </div>
                </div>
                <div className="bg-shadow"></div>
                <div className="adv-img-container adv-img-2">
                    <img src={advimg2} />
                </div>
                <a href="javascript:void(0)" className="btn btn-back-to-home">
                    <span>&nbsp;</span>
                </a>
            </div>
        )
    }
}
export default Swap