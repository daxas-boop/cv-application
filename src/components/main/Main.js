import React,{ Component } from "react";
import  tw, { styled, css } from 'twin.macro';
import WorkExperience from './WorkExperience';
import Profile from './Profile';

const Container = styled.div([
    css ` 
        font-family: 'Roboto', sans-serif;
    `,
    tw `container bg-gray-100 rounded-r-sm rounded-t-none
        col-start-1 col-end-4 row-start-2 row-end-4
        sm:(col-start-2 col-end-4 row-start-2 row-end-6)
    `
])

class Main extends Component{
    render() {
        return(
            <Container>
                <Profile/>
                <WorkExperience/>
            </Container>
        )
    }
}

export default Main;