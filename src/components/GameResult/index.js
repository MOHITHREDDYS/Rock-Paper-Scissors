import {
  ImageContainer,
  ImagesContainer,
  Player,
  Heading,
  Button,
} from './styledComponents'
import {Image} from '../GameChoices/styledComponents'

const GameResult = props => {
  const {yourChoice, opponentChoice, choicesList, playAgain, result} = props

  const you = choicesList.filter(choice => choice.id === yourChoice)
  const opponent = choicesList.filter(choice => choice.id === opponentChoice)

  const onClickingPlayAgain = () => {
    playAgain()
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
      <Heading>{result}</Heading>
      <Button type="button" onClick={onClickingPlayAgain}>
        Play Again
      </Button>
    </>
  )
}

export default GameResult
