import React ,{useState}from 'react'
import {Button,Modal} from 'react-bootstrap';
import './EthAndSelectModal.scss'
import ethicon from '../../images/eth-icon.png'
import EthSecondStep from "./EthSecondStep"
const EthAndSelectModal = (props) => {
    const [modalShow, setModalShow] = useState(false);

    return (
              <div>
              
              <Modal
              {...props}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              className="ethandselect-modal"
            >
              <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                Select a token
                <a href="javascript:void(0)" class="question-mark">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                </a>
                </Modal.Title>
                <button className="close">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-iujRgT cOofSl"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </Modal.Header>
              <Modal.Body>
                <div className="modal-padding">
                <input type="text" className="form-control" placeholder="Search name or paste address"></input>
                <div className="token-toggle">
                  <label>Token Name</label>
                  <a href="javascript:void(0)" className="toggle-switch">
                  ↓
                  </a>
                </div>
                </div>
                <ul>
                  <li>
                  <img src={ethicon} className="etch-icon" />
                                  <span>ETH</span>
                  </li>
                </ul>
                <a href="javascript:void(0)" onClick={() => setModalShow(true)} className="select-list">Select a list</a>
              </Modal.Body>
            </Modal>
              <EthSecondStep show={modalShow} onHide={() => setModalShow(false)}/>
              </div>
            );
          }

 export default EthAndSelectModal