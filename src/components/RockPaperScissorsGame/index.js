import {Component} from 'react'
import {
  MainContainer,
  Container,
  NavContainer,
  NavHeading,
  ScoreContainer,
  Score,
  ImagesContainer,
} from './styledComponents'

import GameChoices from '../GameChoices'
import GameResult from '../GameResult'

class RockPaperScissorsGame extends Component {
  state = {score: 0, yourChoice: '', opponentChoice: '', isGameEnded: false}

  checkResult = yourChoice => {
    const {choicesList} = this.props
    const opponentChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)].id
    this.setState({yourChoice, opponentChoice, isGameEnded: true})
    this.changeScore()
  }

  changeScore = () => {
    const {choicesList, yourChoice, opponentChoice} = this.props
    const you = choicesList.filter(choice => choice.id === yourChoice)
    const opponent = choicesList.filter(choice => choice.id === opponentChoice)
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

    winOrLose === "YOU LOSE" ? (winOrLose !== "IT IS DRAW" ? this.setState({score : score - 1, result : "YOU LOSE"}) : this.setState({score : score - 0}))
  }

  playAgain = () => {
    this.setState({isGameEnded: false})
  }

  render() {
    const {score, isGameEnded, yourChoice, opponentChoice} = this.state
    const {choicesList} = this.props
    return (
      <MainContainer>
        <Container>
          <NavContainer>
            <NavHeading>
              Rock <br /> Paper <br /> Scissors
            </NavHeading>
            <ScoreContainer>
              <Score>Score</Score>
              <Score number>{score}</Score>
            </ScoreContainer>
          </NavContainer>
          {!isGameEnded && (
            <ImagesContainer>
              {choicesList.map(eachChoice => (
                <GameChoices
                  key={eachChoice.id}
                  choice={eachChoice}
                  checkResult={this.checkResult}
                />
              ))}
            </ImagesContainer>
          )}
          {isGameEnded && (
            <GameResult
              yourChoice={yourChoice}
              opponentChoice={opponentChoice}
              choicesList={choicesList}
              playAgain={this.playAgain}
            />
          )}
        </Container>
      </MainContainer>
    )
  }
}

export default RockPaperScissorsGame
