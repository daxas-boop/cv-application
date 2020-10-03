/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { Component } from 'react'
import  tw, { styled, css } from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const Widget = styled.div ([
    css `
        display:flex;
        flex-direction:column;
        border-bottom:1px solid gray;
        width:95%;
        margin: 0 auto;
    `,
    tw `mb-3  text-center flex-1 relative`
])

const Form = styled.form ([
    css ` 
        font-family: 'Roboto', sans-serif;
        position: absolute;
        left:0;
        z-index:1;
        color:black;
    `,
    tw `text-center flex flex-col bg-gray-400 p-1 md:p-3 rounded-sm shadow-md`
])

const List = styled.ul ([
    css `
        flex: 1;
        display:flex;
        justify-content: space-between;
        flex-direction:column;
        margin-bottom:10px;
    `,
    tw `text-sm`
])

const EditButton = styled(FontAwesomeIcon) ([
    tw `absolute right-0 hover:cursor-pointer transition transform hover:scale-150`
])

const Button = styled.button ([
    tw `bg-green-500 hover:bg-green-700 text-white mt-2 font-bold py-2 px-2 border border-green-700 rounded self-center`
])

const Title = styled.h3 ([
    tw `mb-2 text-xl tracking-wider`
])

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contact: {
                email:'',
                phone:'',
                github:'',
                contactEdit: false,
            },
        }

        this.sumbitContactForm = this.sumbitContactForm.bind(this);
        this.toggleContactEdit = this.toggleContactEdit.bind(this);
    }

    toggleContactEdit() {
        this.setState( prevState => ({
            contact: {
                ...prevState.contact,
                contactEdit: !prevState.contact.contactEdit
            }
        }))
    }

    sumbitContactForm(e) {
        e.preventDefault();
        this.toggleContactEdit();
    }

    changeEmail(e) {
        const newValue = e.target.value;
        this.setState( prevState => ({
                contact: {
                    ...prevState.contact,
                    email: newValue
                }
            }))
    }

    changePhone(e) {
        const newValue = e.target.value;
        this.setState( prevState => ({
                contact: {
                    ...prevState.contact,
                    phone: newValue
                }
            }))
    }

    changeGithub(e) {
        const newValue = e.target.value;
        this.setState( prevState => ({
                contact: {
                    ...prevState.contact,
                    github: newValue
                }
            }))
    }

    render() {
        const { contact: {contactEdit, email, phone, github} }= this.state

        return(
            <Widget tw='pt-2'>
                <Title>CONTACT</Title>
                {contactEdit &&
                    <Form onSubmit={(e) => this.sumbitContactForm(e)}>
                        <label>Email</label>
                        <input 
                            maxLength='20' 
                            defaultValue={email} 
                            onChange={ (e)=>this.changeEmail(e) } 
                            type='email'
                        ></input>
                        <label>Phone</label>
                        <input 
                            maxLength='15' 
                            defaultValue={phone} 
                            onChange={ (e)=>this.changePhone(e) }    
                        ></input>
                        <label>Github Page</label>
                        <input 
                            maxLength='15' 
                            defaultValue={github} 
                            onChange={ (e)=>this.changeGithub(e) }
                        ></input>

                        <Button>End edit</Button>
                    </Form>
                }
                    <EditButton 
                        onClick={this.toggleContactEdit}
                        icon={faEdit}/>
                <List>
                    <div>
                        <FontAwesomeIcon tw='mr-2' icon={faEdit}/>
                        <span>{email ? email : 'Enter your email'}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon tw='mr-2' icon={faPhone}/>
                        <span>{phone ? phone : 'Enter your phone'} </span>
                    </div>
                    <div>
                        <FontAwesomeIcon tw='mr-2' icon={faEdit}/>
                        <span>{github ? github : 'github.com/yourpage'}</span>
                    </div>
                </List>
            </Widget>
        )
    }
}

export default Contact;