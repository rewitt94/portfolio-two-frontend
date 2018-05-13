import React from 'react';
import ReactDOM from 'react-dom';
import { Bottom } from './navbars.js';

export class Coding extends React.Component {
  render() {
    return (
      <div>
        <div className="coding_box">
          <div className="coding_page_header">
            <h1><span>Technologies</span></h1>
            <br></br>
            <h3>
            Here are some technologies I have an encoutered.
            As a junior developer I hope to be adding many more.
            </h3>
            <hr></hr>
          </div>
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
                  <p>Opinion</p>
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
                  <p>Fantastic</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>
              What can I say about JS?
              My proper coding experience started with JS.
              I love JS.
              I'd be happy for it to continue with JS.
              True, the language is definitely quirkly and flawed.
              However, Due to it's flexibility it feels almost effortless to write code.
              </p>
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
                  <p>Simple & Effective</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>
              Before I started "actually" coding I did some python.
              I used it to solve Mathematical problems posted on <a href="https://projecteuler.net/">ProjectEuler</a>.
              More recently at Makers Academy we built a python testing framework.
              It was great to revisit the language with an understanding of object orientated principles.
              The language is certainly powerful and easy to use.
              </p>
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
                  <p>Elegant</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>
              As the principle language at Makers Academy I've done some Ruby.
              As a general purpose language Ruby is fairly comparible to Python,
              especially in the context of web development.
              As I like both, I'm fairly indifferent between the two.
              </p>
            </div>
          </div>
          <div className="grid_row">
            <div className="grid_inner_grid">
              <div>
                <div>
                  <p>Rust</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Satisfying</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>
              Rust is definitely a challenge,
              perhaps this is why I found the language so gratifying.
              TDDing a simple bank tech-test in Rust
              was astronomically harder than it would have been in JS.
              I will definitely be using Rust again.
              Somehow the language just feels elegant.
              </p>
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
                  <p>Just do it</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>
              Everything has to be a rectangle?
              Hang-on these rectangles are pretty nifty!
              Having frequently worked with JS in the browser environment I've acquired a few tricks with CSS.
              So far I've built myself two portfolio websites and various browser apps without bootstrap.
              I actually have really enjoyed CSS, but I do not want to become "the HTML guy".
              </p>
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
                  <p>Trivial</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>
              On reflection, probably the hardest language that I know...
              Nothing too exciting here, but part of web-development.
              Technically not a "programming" language.
              </p>
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
                  <p>No problem</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>
              I have used both PSQL and SQLite.
              Since SQL is so widely used I figured it was probably worth a mention.
              However, I've probably not done anything complicated enough to truly appreciate the language.
              I don't even know if SQL can be complicated?
              Not that databases are simple, but the commands to query them seem simple enough...
              </p>
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
                  <p>Opinion</p>
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
                  <p>Slick</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>
              Forgetting my brief encounter with Vue, React is the only client-side framework I know.
              I'm comfortable with the component model and passing information via props and storing it in the state.
              I also introduced a very small Redux store to this app.
              However, I'm still missing a few tricks, I suspect I should be generating more of my JSX instead of typing it.
              </p>
            </div>
          </div>
          <div className="grid_row">
            <div className="grid_inner_grid">
              <div>
                <div>
                  <p>Rails</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Wow</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>
              At Makers Academy we built a acebook website with Rails.
              Without a doubt the framework is almost magic.
              If I were to build myself a full-stack application for myself I would probably use Rails for convience.
              </p>
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
                  <p>Classic</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>
              For me, express is a classic.
              Traditionally everything I was coding was a single page app hosted on an express server.
              The framework is simple and super quick to get going.
              </p>
            </div>
          </div>
          <div className="grid_row">
            <div className="grid_inner_grid">
              <div>
                <div>
                  <p>Sinatra</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Not a fan</p>
                </div>
              </div>
            </div>
            <div className="grid_inner_flex">
              <p>
              At Makers Academy Sinatra was the first web framework we were introduced too.
              Personally I wouldn't choose Sinatra over Express.
              Without the power of Rails I woulnd't choose Ruby as my backend.
              </p>
            </div>
          </div>
        </div>
        <Bottom />
      </div>
    );
  }
}
