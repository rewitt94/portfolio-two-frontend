import React from 'react';
import ReactDOM from 'react-dom';
import { Bottom } from './navbars';
import { Coding } from './coding.js';
import { Projects } from './projects.js';
import { CV } from './CV.js'
import { Copyright } from './copyright.js'

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.root = null;
    this.state = {
      selected: 0,
      opacity: 0.999999999999,
      tabs: [[
        {
          image: "https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6407ad0804025755204bf7807272761a&auto=format&fit=crop&w=1500&q=80",
          text: "Creativity",
          class: "creativity_header"
        },
        {

          image: "https://images.unsplash.com/photo-1507851191112-1bb853d191fb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ea22a92bdd05ed12542fef6af1a02fd1&auto=format&fit=crop&w=1650&q=80",
          text: "Logic",
          class: "logic_header"
        },
        {
          image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=954560871844da528c60343dc344ccbf&auto=format&fit=crop&w=1650&q=80",
          text: "Interest",
          class: "interest_header"
        }
      ],
      [
        {
          image: "https://images.unsplash.com/photo-1516191726963-61dae894c237?ixlib=rb-0.3.5&s=66e8aff4825a17de794beb4223f7c39f&auto=format&fit=crop&w=1650&q=80",
          text: "Imagination",
          class: "imagination_header"
        },
        {

          image: "https://images.unsplash.com/photo-1499560470475-3c75b259add8?ixlib=rb-0.3.5&s=b10eef701c6afbfd8e35ac53e6ce48f6&auto=format&fit=crop&w=2850&q=80",
          text: "Determination",
          class: "determination_header"
        },
        {
          image: "https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d39fe8df8ff9407562e2f89aec3c1318&auto=format&fit=crop&w=1650&q=80",
          text: "Pursuit of Knowledge",
          class: "pusuit_of_knowledge_header"
        }
      ]]
    }
    setInterval(() =>
    {
      if (this.state.selected < 2) {
        this.setState({selected: this.state.selected + 1})
      } else if (this.state.selected == 2) {
        this.setState({selected: 0,})
      }
      setTimeout(() => this.setState({opacity: 0.999999999}), 500)
    } ,3000);
    setInterval(() =>
    {
      this.setState({opacity: this.state.opacity * this.state.opacity})
    }, 50)
  }
  componentDidMount() {
    this.root = document.getElementById('root')
  }
  render() {
    const night = this.props.nightMode;
    const mode = night ? 1 : 0;
    const tab = this.state.tabs[mode][this.state.selected];
    return (
      <div className="image_box">
        <h1 className={tab.class} style={{opacity: this.state.opacity}}>{tab.text}</h1>
        <img
        src={tab.image}
        />
        <img
        className="left_down_arrow"
        onClick={() => this.root.scrollTo(0,window.innerHeight -50)}
        src="https://maxcdn.icons8.com/Share/icon/Arrows//right_down21600.png"
        style={night? {filter: 'invert(100%)'} : {}}
        />
      </div>
    )
  }
}

class HomeBox extends React.Component {
  render() {
    const night = this.props.nightMode;
    return (
      <div className="home_box" style={night ? {background:'rgb(41, 41, 48)', color:'white'} : {}} id="home_box">
        <div className="welcome_box">
          <img
          className="welcome_clipart"
          style={night ? {filter: 'invert(100)'} : {}}
          src="http://www.clker.com/cliparts/E/C/O/z/A/T/swirl-hi.png"/>
          <h1 style={{fontFamily:'cursive',textAlign:'center'}}>Welcome to ricky.hewitt.tech</h1>
          <hr></hr>
        </div>
        <div className="home_wrapper">
          <div><div>
            <div className="home_paragraph_div"><p>See what I have built by viewing a selection of my coding projects. </p></div>
            <div className="home_button_div"><button className="home_button" onClick={() => this.props.goPage(Projects)}>My Apps</button></div>
          </div></div>
          <div><div>
            <div className="home_paragraph_div"><p>Learn what I know by viewing a summary of my coding knowledge.</p></div>
            <div className="home_button_div"><button className="home_button" onClick={() => this.props.goPage(Coding)}>My Coding</button></div>
          </div></div>
          <div><div>
            <div className="home_paragraph_div"><p>Get an interactive breakdown of my CV - PDF also available.</p></div>
            <div className="home_button_div"><button className="home_button" onClick={() => this.props.goPage(CV)}>My CV</button></div>
          </div></div>
          <div><div>
            <div className="home_paragraph_div"><p>Please view the copyright of used images here.</p></div>
            <div className="home_button_div"><button className="home_button" onClick={() => this.props.goPage(Copyright)}>Copyright</button></div>
          </div></div>
        </div>
        <Bottom />
      </div>
    )
  }
}


export class Home extends React.Component {
  render() {
    const night = this.props.nightMode;
    return (
      <div>
        <Widget nightMode={night}/>
        <HomeBox goPage={this.props.goPage} nightMode={night}/>
      </div>
    )
  }
}
