import React, { useState, useEffect } from 'react';
import QuizHeader from './components/quiz-header';
import QuizVideo from './components/quiz-video';
import QuizDescription from './components/quiz-description';
import QuestionsAnswers from './components/questions-answers';
import { Button, Segment } from 'semantic-ui-react'
import { qdata } from './quiz-data';

function App() {
 
  const [quizData, setQuizData] = useState([]) // main quiz data

  const [submitted, setSubmitted] = useState(false) // submit state

  const [score, setScore] = useState(0) // total score

  useEffect(() => {
    if(qdata) setQuizData(qdata)  // initialize data
  }, [])

  function setQuestionAnswer(question_id, answer_id) {  // stores user answer
    const newQuizData = [...quizData]
    if(newQuizData.length > 0) {
      const question = newQuizData[0].questions_answers.find(question => question.id === question_id)
      question.answer_id = answer_id
      setQuizData(newQuizData)
    }
  }

  function handleSubmit(){  // submit the quiz
    const newQuizData = [...quizData]
    if(newQuizData.length > 0) {
      const questions = newQuizData[0].questions_answers
      for (let index = 0; index < questions.length; index++) {
        const question = questions[index]
        const answer = question.answers.find(answer => answer.id === question.answer_id)
        if(answer && answer.is_true)  setScore((score) => {
          return score+1
        })
      }
    }
    setSubmitted(true)
  }

  return (
    <div>
      {quizData.map(quiz => {
        return(
          <div key={quiz.id}>
              <QuizHeader title={quiz.title}></QuizHeader>
              <QuizVideo url={quiz.url}></QuizVideo>
              <QuizDescription description={quiz.description}></QuizDescription>
              <QuestionsAnswers 
                  questionsAsnwers={quiz.questions_answers} 
                  setQuestionAnswer={setQuestionAnswer} 
                  submitted={submitted}
                  >
              </QuestionsAnswers>
              <Segment textAlign='center' raised>
                <Button color="blue" onClick={handleSubmit}>Submit</Button>
              </Segment>
              <Segment textAlign='center' raised>
                Total Score: {score}
              </Segment>              
          </div>
        )
      })}
    </div>
  )
}

export default App;