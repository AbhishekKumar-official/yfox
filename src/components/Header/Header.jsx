import React, { Component } from 'react'
import { Navbar,Nav,Button,FormControl,NavDropdown,Form,Dropdown,Popover } from 'react-bootstrap';
import ConnectToAWalletModal from "../Modals/ConnectToAWalletModal"
import logo from "../../images/logo.png"
import Overlay from 'react-bootstrap/Overlay'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import {NavLink} from "react-router-dom"
import "./Header.component.scss"
class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       show:false,
       show_t:false,
       target:{},
       target_t:{},
       modalVisible:false
    }
  }
  
  handleClick = (e) => {
     let tar = e.target;
    this.setState({
      show:true,
      target:tar
    })
  }
  handleHide = () =>{
    this.setState({
      show:false
    })
  }
  handleClick_t = (e) => {
     let tar = e.target;
    this.setState({
      show_t:true,
      target_t:tar
    })
  }
  handleHide_t = () =>{
    this.setState({
      show_t:false
    })
  }
  handleOpenModal = () => {
    this.setState({
      modalVisible:true
    })
  }
  render(){
    const {show,target,show_t,target_t,modalVisible} = this.state
    return (
      <div>
          <Navbar>
          <Navbar.Brand href="#home">
              <img
                  src={logo}
                  alt="yfox logo"
              />
              </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavLink activeClassName="active" to ="/swap">
                Swap
                </NavLink>
                <NavLink activeClassName="active" to ="/pool">
                Pool
              </NavLink>
    
            </Nav>
            <Form inline>
              <Button className="btn btn-black" onClick={this.handleOpenModal}>Connect to a wallet</Button>{' '}
              <Button className="btn btn-yellow ml-2" onClick={(e) =>this.handleClick(e)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-uJMKN flrdrN"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </Button>{' '}
              <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="btn btn-yellow ml-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="sc-cIShpX bKQvKi"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </Dropdown.Toggle>
    
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                About
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              </Form>
          </Navbar.Collapse>
        </Navbar>
        <Overlay
          show={show}
          onHide={this.handleHide}
          rootClose={show}	
          target={target}
          placement="bottom"
          containerPadding={20}
          trigger='hover'
        >
          <Popover id="popover-contained">
            <Popover.Title as="h3">Transaction Settings</Popover.Title>
            <Popover.Content>
              <div>
              <label>Slippage tolerance</label>
              <OverlayTrigger
              placement="left"
              overlay={
              <Tooltip className="custom-tooltip">
                Your transaction will revert if the price changes unfavorably by more than this percentage.
              </Tooltip>
              }
                  >
          
                  <a href="javascript:void(0)" class="question-mark">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                </a>
              
             </OverlayTrigger>
              </div>
              <div className="btn-wrap">
                <button className="active">0.1%</button>
                <button>0.5%</button>
                <button>1%</button>
                <button>
                  <input type="text" placeholder="0.00"></input>
                  %</button>
              </div>
              <div>
              <label>Transaction deadline</label>
              <OverlayTrigger
              placement="left"
              overlay={
              <Tooltip className="custom-tooltip">
                Your transaction will revert if it is pending for more than this long.
              </Tooltip>
              }
                  >
          
                  <a href="javascript:void(0)" class="question-mark">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                </a>
              
             </OverlayTrigger>
             
              <div className="btn-wrap mb-0">
                <button className="mr-8">
                  <input type="text" placeholder="2"></input>
                </button>
                minutes
              </div>
              </div>
            </Popover.Content>
          </Popover>
        </Overlay>
        <Overlay
          show={show_t}
          onHide={this.handleHide_t}
          rootClose={show_t}	
          target={target_t}
          placement="bottom"
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Title as="h3">Popover bottom</Popover.Title>
            <Popover.Content>
              <strong>Holy guacamole!</strong> Check this info.
            </Popover.Content>
          </Popover>
        </Overlay>

        <ConnectToAWalletModal show={modalVisible} onHide={() => this.setState({modalVisible:false})}/>
   </div>
      )
  }

 
}

export default Header
