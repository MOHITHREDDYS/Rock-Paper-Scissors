import {Image, Button} from './styledComponents'

const GameChoices = props => {
  const {choice, checkResult} = props
  const {imageUrl, id} = choice

  const onClickingImage = () => {
    checkResult(id)
  }

  return (
    <li>
      <Button onClick={onClickingImage}>
        <Image src={imageUrl} alt="your choice" />
      </Button>
    </li>
  )
}

export default GameChoices
