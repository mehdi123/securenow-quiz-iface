import { Segment } from 'semantic-ui-react'

export default function QuizDescription({ description }) {
    return (
        <Segment raised>{description}</Segment>
    )
}