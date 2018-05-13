import React from 'react';
import ReactDOM from 'react-dom';
import { Bottom } from './navbars.js'

import { createStore } from 'redux';
import reducers from '../reducers/index.js';
const store = createStore(reducers);
console.log(store.getState())

export class CV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionSelected: 0,
      questionAnswered: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      order: [0,1,2],
      questionInfo: [
        [
          'I am 24 years old',
          'I studied Maths at university',
          'I built the Eiffel Tower',
          'Ok, this is a practice one.',
          "Of course I didn't build the Eiffel Tower, but I do have it tattooed on my leg."
        ],
        [
          'CIMA Certificate in Business Accounting',
          'TEFL (Teaching English as a Foreign Language)',
          'CIM Certificate in Professional Marketing',
          "I'm no stranger to online learning. Infact I have studied all of the following...",
          "Any junior dev is going to spend atleast half of their time looking for answers online. Atleast I'm used to it."
        ],
        [
          'I have worked in Italy',
          'I have worked in Spain',
          'I have worked in Estonia',
          'I like to consider myself a world citizen.',
          "I hope that wasn't too obvious. I did actually live in Estonia for four years as a kid."
        ],
        [
          'Teaching',
          'Hospitality',
          'Health Care',
          "If you've read my CV you'll know I've worked in all of the following...",
          "I haven't saved any lives... yet."
        ],
        [
          'I had a topknot',
          'I built an igloo and slept in it',
          'I was on a cereal commercial',
          "Since we're getting acquanted, how about a silly one?",
          "I actually prefer musli."
        ],
        [
          'University of Bristol Student Leadership',
          'Reigate Grammar School 6th Form Physics',
          'Royal Victoria Poetry Competition',
          'I have won a couple awards. Which of the following have I (alone or part of a team) won.',
          "Roses are red. violets are blue. I'm good at poetry. That is not true."
        ],
        [
          'I write',
          'I run',
          'I sing',
          "Maybe if we have a hobby in common you'll want to hire me...",
          "You don't want to hear me sing."
        ],
        [
          'React',
          'Ruby',
          'C#',
          "How about a programming related one. I have worked with all of the following...",
          "I haven't had the chance to learn C# yet!"
        ]
      ]
    }
  }
  incorrect(state, n) {
    state.answered[n] = 'incorrect'
    return state
  }
  correct(state, n) {
    state.answered[n] = 'correct'
    return state
  }
  check(pos) {
    console.log(this.state.order)
    const reduxState = store.getState();
    if (reduxState.answered[this.state.questionSelected] == null) {
      if (this.state.order[pos] == 2) {
        this.correct(reduxState, this.state.questionSelected)
        this.forceUpdate()
      } else {
        this.incorrect(reduxState, this.state.questionSelected)
        this.forceUpdate()
      }
    }
  }
  changeOrder() {
    var rand = Math.floor(Math.random() * 6);
    switch (rand) {
      case 0:
        this.setState({order: [0,1,2]});
        break;
      case 1:
        this.setState({order: [1,0,2]});
        break;
      case 2:
        this.setState({order: [0,2,1]});
        break;
      case 3:
        this.setState({order: [1,2,0]});
        break;
      case 4:
        this.setState({order: [2,0,1]});
        break;
      case 5:
        this.setState({order: [2,1,0]});
        break;
    }
  }
  render() {
    const question = this.state.questionSelected;
    const info = this.state.questionInfo;
    const order = this.state.order;
    const answered = store.getState().answered;
    console.log(answered[question])
    return (
      <div>
        <div className="CV_box">
          <div className="title_box">
            <h1><span>Two Truths and a Lie</span></h1>
          </div>
          <div className="horizontal_rule">
            <hr></hr>
          </div>
          <div className="question_buttons">
            <div><div style={answered[0] == null ? {} : answered[0] == 'correct' ? {background: '#007304'} : {background: '#980005'}} onClick={() => {this.changeOrder(); this.setState({questionSelected: 0})}}></div></div>
            <div><div style={answered[1] == null ? {} : answered[1] == 'correct' ? {background: '#007304'} : {background: '#980005'}} onClick={() => {this.changeOrder(); this.setState({questionSelected: 1})}}></div></div>
            <div><div style={answered[2] == null ? {} : answered[2] == 'correct' ? {background: '#007304'} : {background: '#980005'}} onClick={() => {this.changeOrder(); this.setState({questionSelected: 2})}}></div></div>
            <div><div style={answered[3] == null ? {} : answered[3] == 'correct' ? {background: '#007304'} : {background: '#980005'}} onClick={() => {this.changeOrder(); this.setState({questionSelected: 3})}}></div></div>
            <div><div style={answered[4] == null ? {} : answered[4] == 'correct' ? {background: '#007304'} : {background: '#980005'}} onClick={() => {this.changeOrder(); this.setState({questionSelected: 4})}}></div></div>
            <div><div style={answered[5] == null ? {} : answered[5] == 'correct' ? {background: '#007304'} : {background: '#980005'}} onClick={() => {this.changeOrder(); this.setState({questionSelected: 5})}}></div></div>
            <div><div style={answered[6] == null ? {} : answered[6] == 'correct' ? {background: '#007304'} : {background: '#980005'}} onClick={() => {this.changeOrder(); this.setState({questionSelected: 6})}}></div></div>
            <div><div style={answered[7] == null ? {} : answered[7] == 'correct' ? {background: '#007304'} : {background: '#980005'}} onClick={() => {this.changeOrder(); this.setState({questionSelected: 7})}}></div></div>
          </div>
          <div className="arrows">
            <div style={question==0 ? {visibility: 'visible'} : {visibility: 'hidden'}}><img src="http://images.clipartpanda.com/arrow-20clip-20art-1313159942_Vector_Clipart.png"/></div>
            <div style={question==1 ? {visibility: 'visible'} : {visibility: 'hidden'}}><img src="http://images.clipartpanda.com/arrow-20clip-20art-1313159942_Vector_Clipart.png"/></div>
            <div style={question==2 ? {visibility: 'visible'} : {visibility: 'hidden'}}><img src="http://images.clipartpanda.com/arrow-20clip-20art-1313159942_Vector_Clipart.png"/></div>
            <div style={question==3 ? {visibility: 'visible'} : {visibility: 'hidden'}}><img src="http://images.clipartpanda.com/arrow-20clip-20art-1313159942_Vector_Clipart.png"/></div>
            <div style={question==4 ? {visibility: 'visible'} : {visibility: 'hidden'}}><img src="http://images.clipartpanda.com/arrow-20clip-20art-1313159942_Vector_Clipart.png"/></div>
            <div style={question==5 ? {visibility: 'visible'} : {visibility: 'hidden'}}><img src="http://images.clipartpanda.com/arrow-20clip-20art-1313159942_Vector_Clipart.png"/></div>
            <div style={question==6 ? {visibility: 'visible'} : {visibility: 'hidden'}}><img src="http://images.clipartpanda.com/arrow-20clip-20art-1313159942_Vector_Clipart.png"/></div>
            <div style={question==7 ? {visibility: 'visible'} : {visibility: 'hidden'}}><img src="http://images.clipartpanda.com/arrow-20clip-20art-1313159942_Vector_Clipart.png"/></div>
          </div>
          <div className="horizontal_rule">
            <hr></hr>
          </div>
          <div className="comments_box">
            <p>{info[question][3]}<span> Which is the lie?</span></p>
          </div>
          <div className="answers_box">
            <div>
              <h2 onClick={() => this.check(0)} style={answered[question] == null ? {} : order[0] == 2 ? {color: '#007304'} : {color: '#980005'}}>{info[question][order[0]]}</h2>
            </div>
            <div>
              <h2 onClick={() => this.check(1)} style={answered[question] == null ? {} : order[1] == 2 ? {color: '#007304'} : {color: '#980005'}}>{info[question][order[1]]}</h2>
            </div>
            <div>
              <h2 onClick={() => this.check(2)} style={answered[question] == null ? {} : order[2] == 2 ? {color: '#007304'} : {color: '#980005'}}>{info[question][order[2]]}</h2>
            </div>
          </div>
          <div className="comments_box">
            <p style={answered[question] != null ? {} : {visibility: 'hidden'}}>{info[question][4]}</p>
          </div>
          <div className="to_github_box">
            <br/>
            <br/>
            <h1>Please see my CV on GitHub <span onClick={() => {var win = window.open('https://github.com/rewitt94/CV', '_blank'); win.focus()}}>here</span>.</h1>
          </div>
        </div>
        <Bottom />
      </div>
    )
  }
}
