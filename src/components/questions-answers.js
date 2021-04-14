import { Segment, List, Message } from 'semantic-ui-react'

export default function QuestionsAnswers({ questionsAsnwers, submitted, setQuestionAnswer }) {
    function isCorrect(question) {
        const answer = question.answers.find(answer => answer.id === question.answer_id)
        console.log(answer)
        if(answer.is_true) 
            return true
        else
            return false
    }

    return (
        <div>
            {questionsAsnwers.map((questionAnswers, index) => {
                return (
                    <Segment key={questionAnswers.id} raised>
                        {index+1} - {questionAnswers.text}
                        <List>
                            {
                                questionAnswers.answers.map(answer => {
                                    return(
                                        <List.Item key={answer.id}>
                                            <label>
                                                <input type="radio" 
                                                        name={questionAnswers.text.replace(/\s/g, '')}
                                                        value={answer.id}
                                                        onChange={() => {setQuestionAnswer(questionAnswers.id, answer.id)}}
                                                        disabled={submitted}
                                                    />
                                                {answer.text} 
                                            </label>
                                        </List.Item>    
                                    )
                                })
                            }
                        </List>
                        <Message positive content={questionAnswers.feedback_true} hidden={!submitted || !isCorrect(questionAnswers)}>
                        </Message>                                                
                        <Message warning content={questionAnswers.feedback_false} hidden={!submitted || isCorrect(questionAnswers)}>
                        </Message>                        
                    </Segment>
                )
            })}
        </div>
    )
}