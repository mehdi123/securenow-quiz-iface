import { Button, Icon, Container } from 'semantic-ui-react'

export default function QuizVideo({ url }) {
    return (
        <Container textAlign='center'>
            <Button color='youtube' onClick={(e) => window.open(url, "_blank")}>
                <Icon name='youtube' /> Quiz Video
            </Button>
        </Container>
    )
}