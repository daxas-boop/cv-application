/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { Component } from 'react'
import  tw, { styled, css } from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

class Education extends Component {
    constructor(props){
        super(props)
        this.state = {
             education: {
                location:'',
                dateStart:'',
                dateEnd:'',
                title:'',
                educationEdit: false,
            }
        }
        this.sumbitEducationForm = this.sumbitEducationForm.bind(this);
        this.toggleEducationEdit = this.toggleEducationEdit.bind(this);
    }

    toggleEducationEdit() {
        this.setState( prevState => ({
            education: {
                ...prevState.education,
                educationEdit: !prevState.education.educationEdit
            }
        }))
    }

    sumbitEducationForm(e) {
        e.preventDefault();
        this.toggleEducationEdit();
    }

    changeLocation(e){
        const newValue = e.target.value;
        this.setState(prevState => ({
            education:{
                ...prevState.education,
                location:newValue
            }
        }))
    }

    changeDateStart(e){
        const newValue = e.target.value;
        this.setState(prevState => ({
            education:{
                ...prevState.education,
                dateStart:newValue
            }
        }))
    }

    changeDateEnd(e){
        const newValue = e.target.value;
        this.setState(prevState => ({
            education:{
                ...prevState.education,
                dateEnd:newValue
            }
        }))
    }

    changeTitle(e) {
        const newValue = e.target.value;
        this.setState(prevState => ({
            education:{
                ...prevState.education,
                title:newValue
            }
        }))
    }

    render() {
        const {education: {educationEdit, location, dateStart, dateEnd, title}} = this.state;

        return(
            <Widget>
                <Title>EDUCATION</Title>
                {educationEdit &&
                    <Form onSubmit={(e) => this.sumbitEducationForm(e)}>
                        <label>Where did you studied</label>
                        <input 
                            defaultValue={location}
                            maxLength='20'
                            onChange={(e) => this.changeLocation(e)}
                        ></input>
                        <label>Date Start</label>
                        <input 
                            defaultValue={dateStart}
                            onChange={(e) => this.changeDateStart(e)}
                            type='month'
                            ></input>
                        <label>Date End</label>
                        <input
                            defaultValue={dateEnd}
                            onChange={(e) => this.changeDateEnd(e)}
                            type='month'
                        ></input>
                        <label>Title</label>
                        <input
                            defaultValue={title}
                            maxLength='20'
                            onChange={(e) => this.changeTitle(e)}
                        ></input>
                        <Button>End edit</Button>
                    </Form>
                }
                        <EditButton 
                            onClick={this.toggleEducationEdit}
                            icon={faEdit}/>
                    <List>
                        <li>Studied in: {location ? location : 'Where you studied'}</li>
                        <li>Date: {dateStart ? dateStart : 'date'} / {dateEnd ? dateEnd : 'date'}</li>
                        <li>Title: {title ? title : ''}</li>
                    </List>
            </Widget>
        )

    }
}

export default Education;