import React, { Component } from 'react'
import advimg from '../../images/adv-1.png'
import ethicon from '../../images/eth-icon.png'
import advimg2 from '../../images/adv-2.png'
import './Find.scss'

class Find extends Component {
    render() {
        return (
            <div className="find-container">
                <div className="adv-img-container">
                    <img src={advimg} />
                </div>
                <div className="wallet-container">
                    <div className="wallet-picker">
                        <div className="top-content">
                        <a href="javascript:void(0)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-kQsIoO fhNIBC"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        </a>
                        <span>Import Pool</span>
                        <a href="javascript:void(0)" className="question-mark" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        </a>
                        </div>
                        <div className="center-content">
                            <div className="center-row">
                        <div className="border-box">
                            <div className="btn-dropdown-wrap">
                               <button className="btn-dropdown-from">
                                   <div className="d-flex align-items-center">
                                    <img src={ethicon} className="etch-icon" />
                                    <span>ETH</span>
                                    </div>
                                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" class="sc-eKZiaR bwyinG"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
                                    </button>
                                    </div>
                        </div>
                        <button onClick={this.handleSwap} className="swap-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C3C5CB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </button>
                        <div className="border-box">
                        <div className="btn-dropdown-wrap">
                               <button className="btn-dropdown-from">
                                   <div className="d-flex align-items-center">
                                   Select a Token
                                    </div>
                                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" class="sc-eKZiaR bwyinG"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
                                    </button>
                                    </div>
                        </div>
                        <div className="btn btn-connect-wallet">Connect to a wallet to find pools</div>
                        </div>
                        </div>
                    </div>
                </div>
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
export default Find