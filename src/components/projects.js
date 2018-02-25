import React from 'react';
import ReactDOM from 'react-dom';
import { Bottom } from './navbars.js'

export class Projects extends React.Component {
  render() {
    return (
      <div>
        <div className="project_box">
          <div className="project_page_header">
            <h1>Here are a selection of <span>my coding projects</span>.</h1>
            <hr></hr>
          </div>
          <div className="project_row">
            <div className="project_title">
              <h1><span>Portfolio v2</span></h1>
            </div>
            <div className="project_description">
              <p>
              This is the website that you are currently visiting.
              Click <span onClick={() => {var win = window.open('https://github.com/rewitt94/portfolio-two-server', '_blank'); win.focus()}}>here</span> to view the back-end express server.
              Click <span onClick={() => {var win = window.open('https://github.com/rewitt94/portfolio-two-frontend', '_blank'); win.focus()}}>here</span> to view the front-end React app which is webpack compiled and contains a Redux store.
              The website is compatible with mobile (it is compatible with varied screen sizes).</p>
            </div>
          </div>
          <div style={{flexDirection: 'row-reverse'}} className="project_row">
            <div className="project_title">
              <h1><span>Submarine Game</span></h1>
              <button onClick={() => {var win = window.open('/submarine', '_blank'); win.focus()}}>Play now</button>
            </div>
            <div className="project_description">
              <p>This was my first real programming acheivement.
              It is a game developed using entirely Javascript, HTML and CSS.
              The code is sloppy and not optimized.
              However, at the time I was completely thrilled with the result.
              You can see it <span onClick={() => {var win = window.open('https://github.com/rewitt94/submarine', '_blank'); win.focus()}}>here</span>.
              Have a play!
              <br/><br/>N.B. The play button opens a new tab I as it is not integrated into the React App.
              This game will not work on mobile.</p>
            </div>
          </div>
          <div className="project_row">
            <div className="project_title">
              <h1><span>Portfolio v1</span></h1>
            </div>
            <div className="project_description">
              <p>This is a my original website.
              A back-end express serves up different html files.
              It is offline because the current website is vastly superior, but you can view the code <span onClick={() => {var win = window.open('https://github.com/rewitt94/portfolio', '_blank'); win.focus()}}>here</span>.
              I have included this project to see the progression from my first website to the second.</p>
            </div>
          </div>
        </div>
        <Bottom />
      </div>
    )
  }
}
