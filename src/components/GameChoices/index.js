import {Image, Button} from './styledComponents'

const GameChoices = props => {
  const {choice, checkResult} = props
  const {imageUrl, id} = choice

  const onClickingImage = () => {
    checkResult(id)
  }

  let testId = ''
  if (id === 'ROCK') {
    testId = 'rockButton'
  } else if (id === 'PAPER') {
    testId = 'paperButton'
  } else {
    testId = 'scissorsButton'
  }

  return (
    <li>
      <Button onClick={onClickingImage} data-testid={testId}>
        <Image src={imageUrl} alt={id} />
      </Button>
    </li>
  )
}

export default GameChoices
