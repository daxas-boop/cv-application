import React, { Component } from 'react'
import  tw, { styled, css } from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div ([
    css `
        border-bottom:1px solid gray;
        margin:5px;
    `,
    tw `ml-6 mr-6 mt-4 pb-4 relative`
])

const Text = styled.p ([
    css `WORD-BREAK: break-all;`,
    tw `font-light text-sm italic text-justify ml-2`
])

const Title = styled.h3 ([
    tw `mb-2 mr-5 text-xl tracking-wider`
])

const EditButton = styled(FontAwesomeIcon) ([
    css ` position:absolute;
        top:0;
        right:0;
    `,
    tw `hover:cursor-pointer transition transform hover:scale-150 `
])

const Form = styled.form ([
    css ` 
        font-family: 'Roboto', sans-serif;
        position: absolute;
        z-index:1;
    `,
    tw `text-center flex flex-col bg-gray-400 p-2 rounded-sm shadow-md`
])

const Button = styled.button ([
    tw `bg-green-500 hover:bg-green-700 text-white mt-2 font-bold py-2 px-2 border border-green-700 rounded self-center`
])

const TextArea = styled.textarea ([
    css `max-height:200px`

])

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profileText: '',
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

    render(){
        const {profileText, profileEditToggle} = this.state;
        
        return(
            <Container>
                <Title>PROFILE</Title>
                <EditButton
                    icon={faEdit}
                    onClick={(e) => {this.handleProfileEditToggle(e)}}
                />
                <Text>{profileText ? profileText : 'Please enter info you want to share about you.'}</Text>
                {profileEditToggle && 
                    <Form onSubmit={this.handleProfileSubmitForm}>
                        <label>Profile Info</label>
                        <TextArea
                            maxLength="200"
                            defaultValue= {profileText}
                            onChange= {(e) => this.handleProfileChange(e)}
                        ></TextArea>
                        <Button>End edit</Button>
                    </Form>
                }
            </Container>
        )
    }
}

export default Profile;