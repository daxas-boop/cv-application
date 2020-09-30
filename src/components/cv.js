import React,{Component} from "react";
import  tw, { styled, css } from 'twin.macro';
import Header from './header'

const Container = styled.div([
  css `
    min-height: 98vh;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  `,
  tw `container md:w-3/4 lg:w-3/4 xl:w-3/5 mx-auto rounded grid grid-rows-5 grid-cols-3 relative`
])

const Body = styled.div([
    css ` 
        font-family: 'Roboto', sans-serif;
        
    `,
    tw `container bg-gray-100 col-start-2 col-end-4 row-start-2 row-end-6 rounded-r-sm rounded-t-none`
])

const SideNav = styled.div([
    css ` 
        font-family: 'Roboto', sans-serif;
        background-color: #414143;
    `,
    tw `container row-start-2 row-end-6 rounded-l-sm rounded-t-none text-white grid grid-rows-3 `
])

const Profile = styled.div ([
    css `
        border-bottom:1px solid gray;
        margin:5px;
    `,
    tw `ml-6 mr-6 mt-4 pb-4`
])

const WorkExperience = styled.div ([
    css `
        margin:5px;
    `,
    tw `ml-6 mr-6 mt-4 pb-4`
])

const Title = styled.h3 ([
    tw `mb-2 text-xl tracking-wider`
])

const Text = styled.p ([
    tw `font-light text-sm text-justify`
])

const Contact = styled.div ([
    css `
        border-bottom:1px solid gray;
        width:95%;
        margin: 0 auto;
    `,
    tw `mb-3  text-center`
])

const Education = styled.div ([
    css `
        border-bottom:1px solid gray;
        width:95%;
        margin: 0 auto;
    `,
    tw `mb-3 text-center`
])

const Skills = styled.div ([
    css `
        width:95%;
        margin: 0 auto;
    `,
    tw `mb-3 text-center`
])

const Job = styled.div ([

])

const JobPosition = styled.h3 ([
    
])

const Company = styled.h3 ([
    css `
        display: inline-block;
    `
])

const Date = styled.h3 ([
    css `
        display: inline-block;
    `
])

const Studies = styled.div ([

])

const School = styled.h4 ([

])

const Diploma = styled.h4 ([

])

class Cv extends Component {
    render() {
        return(
            <Container>
                <Header />
                <Body>
                    <Profile>
                        <Title>PROFILE</Title>
                        <Text>There are no mistakes. You can fix anything that happens. Just let your mind wander and enjoy. This should make you happy. You can do anything your heart can imagine. Get away from those little Christmas tree things we used to make in school. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned.</Text>
                    </Profile>
                    <WorkExperience>
                        <Title>WORK EXPERIENCE</Title>
                        <Job>
                            <JobPosition>Position Title</JobPosition>
                            <Company>Facebook /</Company>
                            <Date>2017 - Present</Date>
                            <Text>
                                There are no mistakes. You can fix anything that happens. Just let your mind wander and enjoy. This should make you happy. You can do anything your heart can imagine. Get away from those little Christmas tree things we used to make in school. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned.
                            </Text>
                        </Job>
                    </WorkExperience>
                </Body>
                <SideNav>
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
                </SideNav>
            </Container>
        )
    }

} 

export default Cv;