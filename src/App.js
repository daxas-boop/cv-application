import React from "react"
import tw, { styled, css } from 'twin.macro';
import BackgroundImage from './images/test.jpg';
import Header from './components/Header';
import Body from './components/body/Body';
import SideNav from "./components/SideNav";

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

const Wrapper = styled.div([
  css `
    min-height: 98vh;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  `,
  tw `container md:w-3/4 lg:w-3/4 xl:w-3/5 mx-auto rounded grid grid-rows-5 grid-cols-3 relative`
])

function App() {
  return (
    <Container>
      <Wrapper>
          <Header />
          <Body />
          <SideNav />
      </Wrapper>
    </Container>
  );
}

export default App;
