import React from 'react';
import ReactDOM from 'react-dom';
import { Bottom } from './navbars.js';

export class Coding extends React.Component {
  render() {
    return (
      <div>
        <div className="coding_box">
          <div className="header_box">
            <h1>
              <span>Languages</span>
            </h1>
            <hr />
          </div>
          <div className="index_row">
            <div className="index_inner_grid">
              <div>
                <div>
                  <p>Language</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Ability</p>
                </div>
              </div>
            </div>
            <div className="index_inner_flex">
              <p>My Experience</p>
            </div>
          </div>
          <div className="grid_row">
            <div className="grid_inner_grid">
              <div>
                <div>
                  <p>Javascript</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Strong</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>I do actually love Javascript (ninety percent of the time). Three + three / two = sixteen-point-five => Everything I learnt at university is a lie. Oh wait, one of the those three's a string. It's my best language and I hope to keep working with it! </p>
            </div>
          </div>
          <div className="grid_row">
            <div className="grid_inner_grid">
              <div>
                <div>
                  <p>CSS</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Strong</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>Everything has to be a rectangle? Hang-on these rectangles are pretty nifty! Having worked mainly with Javascript I've used a large amount of CSS. So far I've built myself two portfolio websites and various browser apps without bootstrap.</p>
            </div>
          </div>
          <div className="grid_row">
            <div className="grid_inner_grid">
              <div>
                <div>
                  <p>HTML</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Strong</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>Nothing too exciting here, but part of web-development.</p>
            </div>
          </div>
          <div className="grid_row">
            <div className="grid_inner_grid">
              <div>
                <div>
                  <p>Ruby</p>
                </div>
              </div>
              <div>
                <div>
                  <p>OK</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>Ruby-ruby-ruby</p>
            </div>
          </div>
          <div className="grid_row">
            <div className="grid_inner_grid">
              <div>
                <div>
                  <p>Python</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Weak</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>Hello.</p>
            </div>
          </div>
          <div className="grid_row">
            <div className="grid_inner_grid">
              <div>
                <div>
                  <p>SQL</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Very Weak</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>Oi.</p>
            </div>
          </div>
          <div className="header_box">
            <h1>
              <span>Frameworks</span>
            </h1>
            <hr />
          </div>
          <div className="index_row">
            <div className="index_inner_grid">
              <div>
                <div>
                  <p>Framework</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Ability</p>
                </div>
              </div>
            </div>
            <div className="index_inner_flex">
              <p>My Experience</p>
            </div>
          </div>
          <div className="grid_row">
            <div className="grid_inner_grid">
              <div>
                <div>
                  <p>React</p>
                </div>
              </div>
              <div>
                <div>
                  <p>OK</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>This website is built with React so judge for yourself. I am comfortable with the component model and passing information via props and storing it in the state. I know there is further functionality that I am yet to learn. </p>
            </div>
          </div>
          <div className="grid_row">
            <div className="grid_inner_grid">
              <div>
                <div>
                  <p>Express</p>
                </div>
              </div>
              <div>
                <div>
                  <p>OK</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>Express is the only backend that I have worked with.</p>
            </div>
          </div>
          <div className="header_box">
            <h1>
              <span>Accounts</span>
            </h1>
            <hr />
          </div>
          <div className="grid_row">
            <div className="grid_inner_grid">
              <div>
                <div>
                  <p>GitHub</p>
                </div>
              </div>
              <div>
                <div>
                  <p>IMGs</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>Yes</p>
            </div>
          </div>
        </div>
        <Bottom />
      </div>
    );
  }
}
