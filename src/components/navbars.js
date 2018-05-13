import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './home.js'
import { Coding } from './coding.js';
import { Projects } from './projects.js';
import { CV } from './CV.js'
import { Copyright } from './copyright.js'

export class Top extends React.Component {
  constructor(props) {
    super(props);
    this.clickMenu = this.clickMenu.bind(this);
    this.moveMenu = this.moveMenu.bind(this);
    this.state = {
      menuRight: -750,
      menuOpen: false
    }
  }
  clickMenu() {
    this.setState({menuOpen: !(this.state.menuOpen)});
    setTimeout(() => this.moveMenu(), 20);
  }
  moveMenu() {
    if (this.state.menuOpen) {
      if (this.state.menuRight < 0) {
        this.setState({menuRight: this.state.menuRight + 50});
        setTimeout(() => this.moveMenu(), 10);
      }
    } else if (this.state.menuOpen == false) {
      if (this.state.menuRight > -750) {
        this.setState({menuRight: this.state.menuRight - 50});
        setTimeout(() => this.moveMenu(),10);
      }
    }
  }
  render() {
    const night = this.props.nightMode;
    return (
      <div>
        <div className="top" style={{display: 'flex'}}>
          <p style={{flexGrow: 1, alignSelf: 'center', marginLeft: '20px'}}>ricky.hewitt.tech</p>
          <img
          onClick={() => this.props.toggleDay()}
          src="http://laoblogger.com/images/first-quarter-moon-clipart-1.jpg"
          style={night ? {width:'50px', filter: 'invert(100)'} : {width:'50px'}}/>
          <img
          onClick={() => this.props.goPage(Home)}
          src="http://images.clipartpanda.com/home-clip-art-KTnqkGjTq.png"
          style={night ? {margin: '7px', width:'36px', height:'36px', filter: 'invert(100)'} : {margin: '7px', width:'36px', height:'36px'}}/>
          <img
          onClick={() => this.clickMenu()}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          style={night ? {width:'50px', filter: 'invert(100)'} : {width:'50px'}}
          />
        </div>
        <div className="nav_menu" style={{right: this.state.menuRight}}>
          <img
          onClick={() => this.clickMenu()}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          className="internal_menu_sym"
          style={this.state.menuOpen ? {visibility: 'visible'} : {visibility: 'hidden'}}
          />
          <div onClick={() => this.props.goPage(Home)}><h1>Home</h1></div>
          <div onClick={() => this.props.goPage(Projects)}><h1>My Apps</h1></div>
          <div onClick={() => this.props.goPage(Coding)}><h1>My Coding</h1></div>
          <div onClick={() => this.props.goPage(CV)}><h1>My CV</h1></div>
          <div onClick={() => this.props.goPage(Copyright)}><h1>Copyright</h1></div>
        </div>
      </div>
    )
  }
}

export class Bottom extends React.Component {
  render() {
    return (
      <div className="bottom">
        <p>thank you for visiting</p>
        <p>gracias por su visita</p>
        <p>谢谢你的拜访</p>
        <p>merci de votre visite</p>
        <p>شكرا لزيارتك</p>
      </div>
    )
  }
}
