import React, { Component } from 'react'
import  tw, { styled, css } from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const HeaderContainer = styled.div([
    css ` 
        position:relative;
        font-family: 'Roboto', sans-serif;
        background: rgb(255,255,255);
        background: linear-gradient(170deg, rgba(255,255,255,1) 0%, rgba(251,251,251,1) 57%, rgba(189,189,189,1) 58%, rgba(189,189,189,1) 100%);
    `,
    tw `container bg-gray-500 col-start-1 col-end-4 text-center rounded-t-sm flex flex-col justify-center items-start`
])

const EditButton = styled(FontAwesomeIcon) ([
    tw `hover:cursor-pointer transition transform hover:scale-150 `
])

const Wrapper = styled.div (
    tw `flex`
)

const Name = styled.h1 ([
    tw `text-4xl pl-5 tracking-wider`
])

const Ocupation = styled.h3 ([
    tw `pl-5 font-light text-xl`
])

const Form = styled.form ([
    css ` 
        font-family: 'Roboto', sans-serif;
        position: absolute;
        top: 35vh;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index:1;
        @media (min-width: 600px) {
            top: 25vh;
        }
        @media (max-width: 320px) {
            top: 50vh;
        }
    `,
    tw `text-center flex flex-col bg-gray-400 p-2 rounded-sm shadow-md`
])

const Button = styled.button ([
    tw `bg-green-500 hover:bg-green-700 text-white mt-2 font-bold py-2 px-2 border border-green-700 rounded self-center`
])

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Juan Gonzalez',
            profession: 'Frontend Dev.',
            nameToggle: false
        }

        this.toggleNameForm = this.toggleNameForm.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleProfessionChange = this.handleProfessionChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.toggleNameForm();
    }

    toggleNameForm() {
        this.setState(prevState => ({
            nameToggle: !prevState.nameToggle
        }));
    }

    handleNameChange(e) {
        this.setState( {name: e.target.value} )
    }

    handleProfessionChange(e) {
        this.setState( {profession: e.target.value} )
    }

    render(){
        return(
            <HeaderContainer>
                <Wrapper>
                    <Name>{this.state.name}</Name>
                    <EditButton
                        icon={faEdit}
                        onClick={this.toggleNameForm}
                    />
                    {this.state.nameToggle &&
                        <Form onSubmit={ (e) => this.handleSubmit(e) }>
                            <label>Name</label>
                            <input
                                required
                                defaultValue= {this.state.name}
                                onChange={ (e) => this.handleNameChange(e) }
                            ></input>
                            <label>Profession</label>
                            <input
                                required
                                defaultValue= {this.state.profession}
                                onChange={(e) => this.handleProfessionChange(e) }
                            ></input>
                            <Button>End edit</Button>
                        </Form> 
                    }
                </Wrapper>
                <Ocupation>{this.state.profession}</Ocupation>
            </HeaderContainer>
        )
    }

}

export default Header