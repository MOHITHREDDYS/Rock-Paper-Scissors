import {
  ImageContainer,
  ImagesContainer,
  Player,
  Heading,
  Button,
} from './styledComponents'
import {Image} from '../GameChoices/styledComponents'

const GameResult = props => {
  const {yourChoice, opponentChoice, choicesList, playAgain} = props

  const you = choicesList.filter(choice => choice.id === yourChoice)
  const opponent = choicesList.filter(choice => choice.id === opponentChoice)

  const onClickingPlayAgain = () => {
    playAgain()
  }

  let winOrLose = ''

  if (you[0].id === 'ROCK') {
    if (opponent[0].id === 'SCISSORS') {
      winOrLose = 'YOU WIN'
    } else if (opponent[0].id === 'PAPER') {
      winOrLose = 'YOU LOSE'
    } else {
      winOrLose = 'IT IS DRAW'
    }
  } else if (you[0].id === 'PAPER') {
    if (opponent[0].id === 'SCISSORS') {
      winOrLose = 'YOU LOSE'
    } else if (opponent[0].id === 'ROCK') {
      winOrLose = 'YOU WON'
    } else {
      winOrLose = 'IT IS DRAW'
    }
  } else if (you[0].id === 'SCISSORS') {
    if (opponent[0].id === 'PAPER') {
      winOrLose = 'YOU WIN'
    } else if (opponent[0].id === 'ROCK') {
      winOrLose = 'YOU LOSE'
    } else {
      winOrLose = 'IT IS DRAW'
    }
  }

  return (
    <>
      <ImagesContainer>
        <ImageContainer>
          <Player>You</Player>
          <Image src={you[0].imageUrl} alt="your choice" />
        </ImageContainer>
        <ImageContainer>
          <Player>Opponent</Player>
          <Image src={opponent[0].imageUrl} alt="opponent choice" />
        </ImageContainer>
      </ImagesContainer>
      <Heading>{winOrLose}</Heading>
      <Button type="button" onClick={onClickingPlayAgain}>
        Play Again
      </Button>
    </>
  )
}

export default GameResult
