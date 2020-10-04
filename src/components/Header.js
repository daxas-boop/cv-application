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
    tw `hover:cursor-pointer transition transform hover:scale-150`
])

const Wrapper = styled.div (
    tw `flex`
)

const Name = styled.h1 ([
    tw `text-4xl pl-5 tracking-wider break-all`
])

const Ocupation = styled.h3 ([
    tw `pl-5 font-light text-xl break-all`
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
            name: this.getStorage('header_name') || '',
            profession: this.getStorage('header_profession') || '',
            editName: false
        }
        this.toggleEditName = this.toggleEditName.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleProfessionChange = this.handleProfessionChange.bind(this);
    }

    componentDidUpdate(prevState, prevProps) {
        if (this.state.name !== prevState.name) {
            this.setStorage('header_name', this.state.name)
        }
        if (this.state.profession !== prevState.profession) {
            this.setStorage('header_profession', this.state.profession)
        }
    }

    setStorage(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    }

    getStorage(key) {
        return JSON.parse(localStorage.getItem(key))
    }

    handleSubmit(e) {
        e.preventDefault();
        this.toggleEditName();
    }

    toggleEditName() {
        this.setState(prevState => ({
            editName: !prevState.editName
        }));
    }

    handleNameChange(e) {
        this.setState( {name: e.target.value.trim()} )
    }

    handleProfessionChange(e) {
        this.setState( {profession: e.target.value.trim()} )
    }

    render(){
        const {name, profession, editName} = this.state;

        return(
            <HeaderContainer>
                <Wrapper>
                    <Name>{name ? name : 'Your name'}</Name>
                    <EditButton
                        icon={faEdit}
                        onClick={this.toggleEditName}
                    />
                    {editName &&
                        <Form onSubmit={ (e) => this.handleSubmit(e) }>
                            <label>Name</label>
                            <input
                                maxLength="25"
                                defaultValue= {name}
                                onChange={ (e) => this.handleNameChange(e) }
                            ></input>
                            <label>Profession</label>
                            <input
                                maxLength="20"
                                defaultValue= {profession}
                                onChange={(e) => this.handleProfessionChange(e) }
                            ></input>
                            <Button>End edit</Button>
                        </Form> 
                    }
                </Wrapper>
                <Ocupation>{profession ? profession : 'Your profession'}</Ocupation>
            </HeaderContainer>
        )
    }

}

export default Header