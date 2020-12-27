import React from 'react'
import {Button,Modal} from 'react-bootstrap';
import './Common.scss'
import matamask from '../../images/metamask.png'
import walletConnectIcon from '../../images/walletConnectIcon.svg'
import coinbaseWalletIcon from '../../images/coinbaseWalletIcon.svg'
import fortmatic from '../../images/fortmatic.png'
import portisIcon from '../../images/portisIcon.png'

const CommonModal = (props) => {

    return (
              <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="connectwallet-modal"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                  Common
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  BODY
                </Modal.Body>
              </Modal>
            );
          }

 export default CommonModal