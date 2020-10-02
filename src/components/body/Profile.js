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
    render(){
        return(
            <Container>
                <Title>PROFILE</Title>
                <EditButton
                    icon={faEdit}
                    onClick={(e) => {this.props.handleProfileEditToggle(e)}}
                />
                <Text>{this.props.profileText}</Text>
                {this.props.profileEditToggle && 
                    <Form onSubmit={this.props.handleProfileSubmitForm}>
                        <label>Profile Info</label>
                        <TextArea
                            maxLength="200"
                            required
                            defaultValue= {this.props.profileText}
                            onChange= {(e) => this.props.handleProfileChange(e)}
                        ></TextArea>
                        <Button>End edit</Button>
                    </Form>
                }
            </Container>
        )
    }
}

export default Profile;