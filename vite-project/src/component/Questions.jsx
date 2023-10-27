import React from 'react'
import Question from './Question'
import questions from '../data'

const Questions = ({questions}) => {
  return (
    <div className='ques-container'>
        <h1>Questions</h1>
        <div className="ques-wrapper">
        {/* {questions.map((question) =>{
            return <Question key={question.id} {...question} />
        })} */}

        {questions.map((question)=>{
          return <Question key={question.id} {...question} />

        })}




        </div>
      
    </div>
  )
}

export default Questions
