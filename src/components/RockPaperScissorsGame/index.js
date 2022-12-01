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
import RulesPopup from '../RulesPopup'

class RockPaperScissorsGame extends Component {
  state = {
    score: 0,
    yourChoice: '',
    opponentChoice: '',
    isGameEnded: false,
    result: '',
  }

  checkResult = yourChoice => {
    console.log(yourChoice)
    const {score} = this.state
    const {choicesList} = this.props
    const opponentChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)].id
    console.log(opponentChoice)
    this.setState({
      yourChoice,
      opponentChoice,
      isGameEnded: true,
    })
    const you = choicesList.filter(choice => choice.id === yourChoice)
    const opponent = choicesList.filter(choice => choice.id === opponentChoice)
    let winOrLose = ''

    if (you[0].id === 'ROCK') {
      if (opponent[0].id === 'SCISSORS') {
        winOrLose = 'YOU WON'
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
        winOrLose = 'YOU WON'
      } else if (opponent[0].id === 'ROCK') {
        winOrLose = 'YOU LOSE'
      } else {
        winOrLose = 'IT IS DRAW'
      }
    }

    /* return winOrLose === 'YOU LOSE'
      ? this.setState({score: score - 1, result: 'YOU LOSE'})
      : this.setState({score: score + 1, result: 'YOU WON'}) */

    if (winOrLose === 'YOU WON') {
      this.setState({score: score + 1, result: 'YOU WON'})
    } else if (winOrLose === 'YOU LOSE') {
      this.setState({score: score - 1, result: 'YOU LOSE'})
    } else {
      this.setState({result: 'IT IS DRAW'})
    }
  }

  /*  changeScore = () => {
    const {choicesList} = this.props
    const {yourChoice, opponentChoice, score} = this.state
    console.log(yourChoice, opponentChoice)
  }
 */
  playAgain = () => {
    this.setState({isGameEnded: false})
  }

  render() {
    const {score, isGameEnded, yourChoice, opponentChoice, result} = this.state
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
              result={result}
            />
          )}
          <RulesPopup />
        </Container>
      </MainContainer>
    )
  }
}

export default RockPaperScissorsGame
