import { Header, Icon} from 'semantic-ui-react'

export default function QuizHeader({ title }) {
    return (
            <Header as='h3' textAlign='center' block>
                <Icon name="pencil"></Icon>
                {title}
            </Header>
    )
}