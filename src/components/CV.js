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
          'I am 23 years old',
          'I studied Maths at university',
          'I built the Eiffel Tower',
          'Ok, this is a practice one. Which is the lie?',
          "Ofcourse I didn't build the Eiffel Tower, but I do have it tattooed on my leg."
        ],
        [
          'I have worked in Italy',
          'I have worked in Spain',
          'I have worked in Estonia',
          'I like to consider myself a world citizen. Which is the lie?',
          "Ofcourse I didn't build the Eiffel Tower, but I do have it tattooed on my leg"
        ],
        [
          'I am 23 years old.',
          'I studied Maths at university.',
          'I built the Eiffel Tower.',
          'Which is the lie?',
          "Ofcourse I didn't build the Eiffel Tower, but I do have it tattooed on my leg"
        ],
        [
          'I am 23 years old.',
          'I studied Maths at university.',
          'I built the Eiffel Tower.',
          'Which is the lie?',
          "Ofcourse I didn't build the Eiffel Tower, but I do have it tattooed on my leg"
        ],
        [
          'I am 23 years old.',
          'I studied Maths at university.',
          'I built the Eiffel Tower.',
          'Which is the lie?',
          "Ofcourse I didn't build the Eiffel Tower, but I do have it tattooed on my leg"
        ],
        [
          'I am 23 years old.',
          'I studied Maths at university.',
          'I built the Eiffel Tower.',
          'Which is the lie?',
          "Ofcourse I didn't build the Eiffel Tower, but I do have it tattooed on my leg"
        ],
        [
          'I am 23 years old.',
          'I studied Maths at university.',
          'I built the Eiffel Tower.',
          'Which is the lie?',
          "Ofcourse I didn't build the Eiffel Tower, but I do have it tattooed on my leg"
        ],
        [
          'I am 23 years old.',
          'I studied Maths at university.',
          'I built the Eiffel Tower.',
          'Which is the lie?',
          "Ofcourse I didn't build the Eiffel Tower, but I do have it tattooed on my leg"
        ]
      ]
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
    const answered = store.getState().answered;
    const info = this.state.questionInfo;
    const order = this.state.order;
    return (
      <div>
        <div className="CV_box">
          <div className="title_box">
            <h1><span>Two Truths and a Lie</span></h1>
          </div>
          <div className="comments_box">
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
          <div className="comments_box">
            <hr></hr>
            <h2 style={answered[question] == null ? {} : order[0] == 2 ? {color: '#007304'} : {color: '#980005'}}>{info[question][order[0]]}</h2>
            <h2 style={answered[question] == null ? {} : order[1] == 2 ? {color: '#007304'} : {color: '#980005'}}>{info[question][order[1]]}</h2>
            <h2 style={answered[question] == null ? {} : order[2] == 2 ? {color: '#007304'} : {color: '#980005'}}>{info[question][order[2]]}</h2>
            <br></br>
            <br></br>
            <p style={answered[question] != null ? {} : {visibility: 'hidden'}}>{info[question][4]}</p>
          </div>
          <div className="to_github_box">
            <p>{answered[question]}</p>
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
