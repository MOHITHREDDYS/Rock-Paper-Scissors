import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 10px 0px;
`
export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NavContainer = styled.nav`
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 6px 20px;
  font-family: 'Bree Serif';
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const NavHeading = styled.h1`
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 20px;
`

export const Score = styled.p`
  color: #223a5f;
  margin: 0px;
  font-weight: bold;
  text-align: center;
  font-size: ${props => (props.number ? 50 : 20)}px;
  font-family: ${props => (props.number ? 'Roboto' : 'Bree Serif')};
`
export const ImagesContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 400px;
  margin-top: 100px;
`
