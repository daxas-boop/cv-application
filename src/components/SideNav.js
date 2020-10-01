import React, { Component } from 'react'
import  tw, { styled, css } from 'twin.macro';

const Container = styled.div([
    css ` 
        font-family: 'Roboto', sans-serif;
        background-color: #414143;
    `,
    tw `container row-start-2 row-end-6 rounded-l-sm rounded-t-none text-white flex flex-col`
])


const Title = styled.h3 ([
    tw `mb-2 text-xl tracking-wider`
])

const Contact = styled.div ([
    css `
        border-bottom:1px solid gray;
        width:95%;
        margin: 0 auto;
    `,
    tw `mb-3  text-center flex-1`
])

const Education = styled.div ([
    css `
        border-bottom:1px solid gray;
        width:95%;
        margin: 0 auto;
    `,
    tw `mb-3 text-center flex-1`
])

const Skills = styled.div ([
    css `
        width:95%;
        margin: 0 auto;
    `,
    tw `mb-3 text-center flex-1`
])


const Date = styled.h3 ([
    
])

const Studies = styled.div ([

])

const School = styled.h4 ([

])

const Diploma = styled.h4 ([

])

class SideNav extends Component {
    render() {
        return(
            <Container>
                <Contact>
                    <Title>CONTACT</Title>
                </Contact>
                <Education>
                    <Title>EDUCATION</Title>
                    <Studies>
                        <School>New York. UEA</School>
                        <Date>2017 - Present</Date>
                        <Diploma>Major Science</Diploma>
                    </Studies>
                </Education>
                <Skills>
                    <Title>SKILLS</Title>
                </Skills>
            </Container>
        )
    }
}

export default SideNav;