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
            location: this.getStorage('education_location') || '',
            dateStart: this.getStorage('education_date_start') || '',
            dateEnd: this.getStorage('education_date_end') || '',
            title: this.getStorage('education_title') || '',
            educationEdit: false,
        }
        this.sumbitEducationForm = this.sumbitEducationForm.bind(this);
        this.toggleEducationEdit = this.toggleEducationEdit.bind(this);
    }

    componentDidUpdate(prevState) {
        if(this.state.location !== prevState.location) {
            this.setStorage('education_location', this.state.location)
        }

        if(this.state.dateStart !== prevState.dateStart) {
            this.setStorage('education_date_start', this.state.dateStart)
        }

        if(this.state.dateEnd !== prevState.dateEnd) {
            this.setStorage('education_date_end', this.state.dateEnd)
        }

        if(this.state.title !== prevState.title) {
            this.setStorage('education_title', this.state.title)
        }
    }

    setStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    getStorage(key) {
        return JSON.parse(localStorage.getItem(key))
    }

    toggleEducationEdit() {
        this.setState( prevState => ({
            educationEdit: !prevState.educationEdit
        }))
    }

    sumbitEducationForm(e) {
        e.preventDefault();
        this.toggleEducationEdit();
    }

    changeLocation(e){
        const newValue = e.target.value;
        this.setState( {location:newValue} )
    }

    changeDateStart(e){
        const newValue = e.target.value;
        this.setState( {dateStart:newValue} )
    }

    changeDateEnd(e){
        const newValue = e.target.value;
        this.setState( {dateEnd:newValue} )
    }

    changeTitle(e) {
        const newValue = e.target.value;
        this.setState( {title:newValue} )
    }

    render() {
        const {educationEdit, location, dateStart, dateEnd, title} = this.state;

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