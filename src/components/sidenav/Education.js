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

    render() {
        const {educationEdit, university, dateStart, dateEnd, title,
            sumbitEducationForm, toggleEducationEdit} = this.props

        return(
            <Widget>
                <Title>EDUCATION</Title>
                {educationEdit &&
                    <Form onSubmit={(e) => sumbitEducationForm(e)}>
                        <label>Where did you studied</label>
                        <input type='email'></input>
                        <label>Date Start</label>
                        <input type='month'></input>
                        <label>Date End</label>
                        <input type='month'></input>
                        <label>Title</label>
                        <input></input>
                        <Button>End edit</Button>
                    </Form>
                }
                        <EditButton 
                            onClick={toggleEducationEdit}
                            icon={faEdit}/>
                    <List>
                        <li>Studied in: {university ? university : 'Where you studied'}</li>
                        <li>Date: {dateStart ? dateStart : '2020'} / {dateEnd ? dateEnd : '2020'}</li>
                        <li>Title: {title ? title : ''}</li>
                    </List>
            </Widget>
        )

    }
}

export default Education;