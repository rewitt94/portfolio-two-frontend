import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/style.css";
import "./styles/coding.css";
import "./styles/navbars.css";
import "./styles/projects.css";
import "./styles/CV.css";
import "./styles/copyright.css"
import "./styles/myself.css";
import { Home } from './components/home.js';
import { Top } from './components/navbars.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenComponent: Home,
      nightMode: false
    }
    if (!(this.state.dayMode)) {
    }
  }
  render() {
    const night = this.state.nightMode;
    return (
      <div className={(night ? 'night' : 'day') + " root"} ref="root" id="root">
        <Top
        nightMode={night}
        toggleDay={() => this.setState({nightMode: !(night)})}
        goPage={(page) => { this.setState({chosenComponent: page}); this.refs.root.scrollTo(0,0)}}
        />
        <this.state.chosenComponent
        nightMode={night}
        goPage={(page) => { this.setState({chosenComponent: page}); this.refs.root.scrollTo(0,0)}}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.body);
