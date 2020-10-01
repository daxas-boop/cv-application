import React,{ Component } from "react";
import  tw, { styled, css } from 'twin.macro';
import WorkExperience from './WorkExperience';
import Profile from './Profile';

const Container = styled.div([
    css ` 
        font-family: 'Roboto', sans-serif;
    `,
    tw `container bg-gray-100 col-start-2 col-end-4 row-start-2 row-end-6 rounded-r-sm rounded-t-none`
])

class Body extends Component{
    constructor(props) {
        super(props);
        this.state = {
            profileText: 'Info about you',
            profileEditToggle: false,
        }

        this.handleProfileEditToggle = this.handleProfileEditToggle.bind(this);
        this.handleProfileSubmitForm = this.handleProfileSubmitForm.bind(this);
        this.handleProfileChange = this.handleProfileChange.bind(this);
    }

    handleProfileChange(e) {
        this.setState({
            profileText: e.target.value
        })
    }

    handleProfileSubmitForm(e) {
        e.preventDefault();
        this.handleProfileEditToggle();
    }

    handleProfileEditToggle() {
        this.setState(prevState => ({
            profileEditToggle: !prevState.profileEditToggle
        }));
    }

    render() {
        return(
            <Container>
                <Profile
                    handleProfileEditToggle= {this.handleProfileEditToggle}
                    handleProfileChange= {this.handleProfileChange}
                    handleProfileSubmitForm = {this.handleProfileSubmitForm}
                    profileText = {this.state.profileText}
                    profileEditToggle = {this.state.profileEditToggle}
                />
                <WorkExperience></WorkExperience>
            </Container>
        )
    }
}

export default Body;