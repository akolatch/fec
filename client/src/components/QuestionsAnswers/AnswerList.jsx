import React from "react";
import Answer from "./Answer.jsx";
//import ReactCSSTransitionGroup from 'react-transition-group';

const AnswerList = ({answers, quantity, handleMore, handleLess}) => {

  let renderedAnswers = [];

  for (var i =0; i < quantity; i++) {
    if (answers[i]) {
      renderedAnswers.push(answers[i])
    }
  };

  let showHideButton;
  if (quantity < answers.length) {
    showHideButton = <div onClick={handleMore} className="showHideAnswers">SHOW MORE ANSWERS</div>
  } else if (answers.length === 2) {
    showHideButton = null;
  } else {
    showHideButton = <div onClick={handleLess} className="showHideAnswers">HIDE ANSWERS</div>
  }

  // console.log("rendered answers", renderedAnswers);

  // console.log("answers:", answers);
  if (answers.length === 0) {
    return (<div className="answerList"><span className="noAnswers">No answers yet.</span></div>)
  } else {
  return (
    <div className="answerList">
        {/* <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}> */}
      {renderedAnswers.map((answer) => {
        return (<Answer answer={answer} key={answer[0]} fullLength={answers.length}/>)
      })}
      {showHideButton}
      {/* </ReactCSSTransitionGroup> */}
    </div>
  )}


};

export default AnswerList;
