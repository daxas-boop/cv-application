import React from "react"
import tw, { styled, css } from 'twin.macro';
import BackgroundImage from './images/test.jpg'
import Cv from './components/cv'

const Container = styled.div([
  css `
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center left;
    min-height: 100vh;
  `,
  tw `flex items-center`
])


function App() {
  return (
    <Container>
      <Cv></Cv>
    </Container>
  );
}

export default App;
