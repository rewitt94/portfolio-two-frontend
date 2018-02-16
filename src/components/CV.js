import React from 'react';
import ReactDOM from 'react-dom';
import { Bottom } from './navbars.js'

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
  componentWillMount() {
    var order = [];
    var rand = Math.floor(Math.random() * 6);
    switch (rand) {
      case 0:
        order = [0,1,2];
        break;
      case 1:
        order = [1,0,2];
        break;
      case 2:
        order = [0,2,1];
        break;
      case 3:
        order = [1,2,0];
        break;
      case 4:
        order = [2,0,1];
        break;
      case 5:
        order = [2,1,0];
        break;
    }
    2 == order[0] ? this.optionOneIsLie = true : this.optionOneIsLie = false;
    2 == order[1] ? this.optionTwoIsLie = true : this.optionTwoIsLie = false;
    2 == order[2] ? this.optionThreeIsLie = true : this.optionThreeIsLie = false;
    this.optionOne = this.state.questionInfo[this.state.questionSelected][order[0]];
    this.optionTwo = this.state.questionInfo[this.state.questionSelected][order[1]];
    this.optionThree = this.state.questionInfo[this.state.questionSelected][order[2]];
    this.optionOneIsLie ? this.optionOneReveal = 'is a lie' : this.optionOneReveal = 'is true'
    this.optionTwoIsLie ? this.optionTwoReveal = 'is a lie' : this.optionTwoReveal = 'is true'
    this.optionThreeIsLie ? this.optionThreeReveal = 'is a lie' : this.optionThreeReveal = 'is true'
  }
  componentWillUpdate() {
    var order = [];
    var rand = Math.floor(Math.random() * 6);
    switch (rand) {
      case 0:
        order = [0,1,2];
        break;
      case 1:
        order = [1,0,2];
        break;
      case 2:
        order = [0,2,1];
        break;
      case 3:
        order = [1,2,0];
        break;
      case 4:
        order = [2,0,1];
        break;
      case 5:
        order = [2,1,0];
        break;
    }
    2 == order[0] ? this.optionOneIsLie = true : this.optionOneIsLie = false;
    2 == order[1] ? this.optionTwoIsLie = true : this.optionTwoIsLie = false;
    2 == order[2] ? this.optionThreeIsLie = true : this.optionThreeIsLie = false;
    this.optionOne = this.state.questionInfo[this.state.questionSelected][order[0]];
    this.optionTwo = this.state.questionInfo[this.state.questionSelected][order[1]];
    this.optionThree = this.state.questionInfo[this.state.questionSelected][order[2]];
    this.optionOneIsLie ? this.optionOneReveal = 'is a lie' : this.optionOneReveal = 'is true'
    this.optionTwoIsLie ? this.optionTwoReveal = 'is a lie' : this.optionTwoReveal = 'is true'
    this.optionThreeIsLie ? this.optionThreeReveal = 'is a lie' : this.optionThreeReveal = 'is true'
  }
  render() {
    const question = this.state.questionSelected;
    const answered = this.state.questionAnswered;
    const info = this.state.questionInfo;
    return (
      <div>
        <div className="CV_box">
          <div className="title_box">
            <h1><span>Two Truths and a Lie</span></h1>
          </div>
          <div className="question_box">
            <p>{info[question][3]}</p>
          </div>
          <div className="options_box">
            <div>
              <h2
              onClick={() =>
                {
                  var array = answered;
                  if (this.optionOneIsLie && array[question] == null) {
                    array[question] = 'correct';
                    this.setState({questionAnswered: array})
                  } else if (!this.optionOneIsLie && array[question] == null) {
                    array[question] = 'incorrect';
                    this.setState({questionAnswered: array})
                  }
                }
              }
              >{this.optionOne}</h2>
              <p style={answered[question] != null ? {} : {visibility: 'hidden'}}>{this.optionOneReveal}</p>
            </div>
            <div>
              <h2
              onClick={() =>
                {
                  var array = answered;
                  if (this.optionTwoIsLie && array[question] == null) {
                    array[question] = 'correct';
                    this.setState({questionAnswered: array})
                  } else if (!this.optionTwoIsLie && array[question] == null) {
                    array[question] = 'incorrect';
                    this.setState({questionAnswered: array})
                  }
                }
              }
              >{this.optionTwo}</h2>
              <p style={answered[question] != null ? {} : {visibility: 'hidden'}}>{this.optionTwoReveal}</p>
            </div>
            <div>
              <h2
              onClick={() =>
                {
                var array = answered;
                  if (this.optionThreeIsLie && array[question] == null) {
                    array[question] = 'correct';
                    this.setState({questionAnswered: array})
                  } else if (!this.optionThreeIsLie && array[question] == null) {
                    array[question] = 'incorrect';
                    this.setState({questionAnswered: array})
                  }
                }
              }
              >{this.optionThree}</h2>
              <p style={answered[question] != null ? {} : {visibility: 'hidden'}}>{this.optionTwoReveal}</p>
            </div>
          </div>
          <div className="comments_box">
            <p style={answered[question] != null ? {} : {visibility: 'hidden'}}>{info[question][4]}</p>
            <hr></hr>
          </div>
          <div className="question_buttons">
            <div><div style={answered[0] == null ? {} : answered[0] == 'correct' ? {background: '#007304'} : {background: '#980005'}} onClick={() => this.setState({questionSelected: 0})}></div></div>
            <div><div style={answered[1] == null ? {} : answered[1] == 'correct' ? {background: '#007304'} : {background: '#980005'}} onClick={() => this.setState({questionSelected: 1})}></div></div>
            <div><div style={answered[2] == null ? {} : answered[2] == 'correct' ? {background: '#007304'} : {background: '#980005'}} onClick={() => this.setState({questionSelected: 2})}></div></div>
            <div><div style={answered[3] == null ? {} : answered[3] == 'correct' ? {background: '#007304'} : {background: '#980005'}} onClick={() => this.setState({questionSelected: 3})}></div></div>
            <div><div style={answered[4] == null ? {} : answered[4] == 'correct' ? {background: '#007304'} : {background: '#980005'}} onClick={() => this.setState({questionSelected: 4})}></div></div>
            <div><div style={answered[5] == null ? {} : answered[5] == 'correct' ? {background: '#007304'} : {background: '#980005'}} onClick={() => this.setState({questionSelected: 5})}></div></div>
            <div><div style={answered[6] == null ? {} : answered[6] == 'correct' ? {background: '#007304'} : {background: '#980005'}} onClick={() => this.setState({questionSelected: 6})}></div></div>
            <div><div style={answered[7] == null ? {} : answered[7] == 'correct' ? {background: '#007304'} : {background: '#980005'}} onClick={() => this.setState({questionSelected: 7})}></div></div>
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
          <div className="to_github_box">
            <hr></hr>
            <br/>
            <br/>
            <h1>Please see my CV on GitHub <span>here</span>.</h1>
          </div>
        </div>
        <Bottom />
      </div>
    )
  }
}
