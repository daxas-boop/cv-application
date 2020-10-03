/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { Component } from 'react'
import  tw, { styled, css } from 'twin.macro';
import Contact from './Contact'
import Education from './Education'
import Skills from './Skills'

const Container = styled.div([
    css ` 
        font-family: 'Roboto', sans-serif;
        background-color: #414143;
    `,
    tw `container rounded-l-sm rounded-t-none text-white flex flex-col
        col-start-1 col-end-4 
        sm:(row-start-2 row-end-6) sm:(col-start-1 col-end-2)
    `
])

class SideNav extends Component {
    render() {
        return(
            <Container>
                <Contact />
                <Education />
                <Skills />
            </Container>
        )
    }
}

export default SideNav;