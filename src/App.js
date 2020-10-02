import React from "react"
import tw, { styled, css } from 'twin.macro';
import BackgroundImage from './images/test.jpg';
import Header from './components/Header';
import Body from './components/body/Body';
import SideNav from "./components/sidenav/SideNav";

const Container = styled.div([
  css `
    background-color:#eee;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center left;
    min-height: 100vh;
    @media (max-width: 640px) {
      background-image:none;
    }
  `,
  tw `flex items-center`
])

const Wrapper = styled.div([
  css `
    min-height: 98vh;
    max-width: 100vw;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    @media (max-width: 640px) {
      min-height: 100vh;
    }
  `,
  tw `container mx-auto rounded grid relative
      grid-rows-3 grid-cols-3
      sm:(grid-rows-5 grid-cols-3)
      md:w-3/4 
      lg:w-3/4 
      xl:w-1/2`
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
