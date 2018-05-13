import React from 'react';
import ReactDOM from 'react-dom';
import { Bottom } from './navbars.js'

export class Projects extends React.Component {
  render() {
    return (
      <div>
        <div className="project_box">
          <div className="project_page_header">
            <h1>Here are a selection of <span>my projects at Makers Academy</span>.</h1>
            <br></br>
            <h3>
            Having attended Makers Academy I have learnt to write to good quality code.
            We strive to follow good practices.
            Including TDD, object orientated principles, work-flow and most importantly team work.
            </h3>
            <hr></hr>
          </div>
          <div className="project_row">
            <div className="project_title">
              <h1><span>Testing Framework</span></h1>
              <button onClick={() => {var win = window.open('https://github.com/DrSerpent/DrSerpent-Core', '_blank'); win.focus()}}>GitHub</button>
              <br></br>
              <button onClick={() => {var win = window.open('https://pypi.org/project/drserpent/', '_blank'); win.focus()}}>PyPi</button>
            </div>
            <div className="project_description">
              <h4>
                Our final project at Makers Academy was to create a python tested framework.
                It is avaible on open source and tested in itself.
              </h4>
            </div>
          </div>
          <div style={{flexDirection: 'row-reverse'}} className="project_row">
            <div className="project_title">
              <h1><span>Bank</span></h1>
              <button onClick={() => {var win = window.open('https://github.com/rewitt94/bank', '_blank'); win.focus()}}>GitHub</button>
            </div>
            <div className="project_description">
              <h4>
                A simple Bank tech-test programmed in new "hipster" language Rust.
              </h4>
            </div>
          </div>
          <div className="project_row">
            <div className="project_title">
              <h1><span>Acebook</span></h1>
              <button onClick={() => {var win = window.open('https://acebook-pinkfish.herokuapp.com/', '_blank'); win.focus()}}>Live App</button>
              <br></br>
              <button onClick={() => {var win = window.open('https://github.com/Hemesh-Unka/acebook-pinkfish', '_blank'); win.focus()}}>GitHub</button>
              <br></br>
              <button onClick={() => {var win = window.open('https://medium.com/team-pinkfish/day-two-ten-points-to-rubyclaw-eed520a989ef', '_blank'); win.focus()}}>Blog Post</button>
            </div>
            <div className="project_description">
              <h4>
                A group project to build a facebook clone using Ruby on Rails.
              </h4>
            </div>
          </div>
          <div className="project_page_header">
            <h1>Here are a selection of <span>my personal coding projects</span>.</h1>
            <br></br>
            <h3>
            I started learning to code before Makers.
            These projects were more focused on product than process.
            It is Javascript from here on.
            </h3>
            <hr></hr>
          </div>
          <div className="project_row">
            <div className="project_title">
              <h1><span>Bowling</span></h1>
              <button onClick={() => {var win = window.open('/bowling', '_blank'); win.focus()}}>Play now</button>
              <br></br>
              <button onClick={() => {var win = window.open('https://github.com/rewitt94/bowling', '_blank'); win.focus()}}>GitHub</button>
            </div>
            <div className="project_description">
              <h4>
                An experiment with HTML canvas to make a functional bowling game.
              </h4>
            </div>
          </div>
          <div style={{flexDirection: 'row-reverse'}} className="project_row">
            <div className="project_title">
              <h1><span>Reversi</span></h1>
              <button onClick={() => {var win = window.open('/reversi', '_blank'); win.focus()}}>Play now</button>
              <br></br>
              <button onClick={() => {var win = window.open('https://github.com/rewitt94/reversi', '_blank'); win.focus()}}>GitHub</button>
            </div>
            <div className="project_description">
              <h4>
                A copy of the classic board game Reversi - also called Othello.
                Available split screen or via websocket.
                You need another human.
              </h4>
            </div>
          </div>
          <div className="project_row">
            <div className="project_title">
              <h1><span>Portfolio v2</span></h1>
              <button onClick={() => {var win = window.open('https://github.com/rewitt94/portfolio-two-frontend', '_blank'); win.focus()}}>React App GitHub</button>
              <br></br>
              <button onClick={() => {var win = window.open('https://github.com/rewitt94/portfolio-two-server', '_blank'); win.focus()}}>Server GitHub</button>
            </div>
            <div className="project_description">
              <h4>
                The website that you are currently visiting.
                There are seperate GitHub repositories for the React App and the repository that is hosted on AWS.
              </h4>
            </div>
          </div>
          <div style={{flexDirection: 'row-reverse'}} className="project_row">
            <div className="project_title">
              <h1><span>Submarine Game</span></h1>
              <button onClick={() => {var win = window.open('/submarine', '_blank'); win.focus()}}>Play now</button>
              <br></br>
              <button onClick={() => {var win = window.open('https://github.com/rewitt94/submarine', '_blank'); win.focus()}}>GitHub</button>
            </div>
            <div className="project_description">
              <h4>
                This was my first real programming acheivement.
              </h4>
            </div>
          </div>
        </div>
      <Bottom />
    </div>
    )
  }
}
