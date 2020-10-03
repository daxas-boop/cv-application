/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { Component } from 'react'
import  tw, { styled, css } from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import uniqid from 'uniqid';

const Title = styled.h3 ([
    tw `mb-2 text-xl tracking-wider`
])

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

const Button = styled.button ([
    tw `bg-green-500 hover:bg-green-700 text-white mt-2 font-bold py-2 px-2 border border-green-700 rounded self-center`
])

class Skills extends Component {
    constructor(props){
        super(props)
        this.state ={
            arraySkills:[],
            skillEdit:false,
            newSkillInput: '' 
        }
        this.sumbitSkillsForm = this.sumbitSkillsForm.bind(this);
        this.toggleSkillEdit = this.toggleSkillEdit.bind(this);
        this.deleteSkill = this.deleteSkill.bind(this);
        this.handleChangeNewSkill = this.handleChangeNewSkill.bind(this);
        this.addSkill = this.addSkill.bind(this)
    }

    toggleSkillEdit(){
        this.setState( prevState => ({
            skillEdit: !prevState.skillEdit
        }))
    }

    sumbitSkillsForm(e){
        e.preventDefault();
        this.toggleSkillEdit();
    }

    deleteSkill(key) {
        this.setState({
            arraySkills: [...this.state.arraySkills.filter( skill =>
            skill.key !== key)]
        })
    }

    handleChangeNewSkill(e) {
        this.setState({newSkillInput: e.target.value})
    }

    addSkill(){
        const newSkill = {
            skill: this.state.newSkillInput,
            key: uniqid()
        }

        this.setState( prevState => ({
            arraySkills: [...prevState.arraySkills, newSkill],
            newSkillInput:''
        }))
    }

    render() {
        const { skillEdit, arraySkills, newSkillInput} = this.state

        return(
            <Widget tw='border-none mb-0'>
                <Title>SKILLS</Title>
                {skillEdit &&
                    <Form onSubmit={(e) => this.sumbitSkillsForm(e)}>
                        <label>Add a skill</label>
                        <input
                            value={newSkillInput}
                            onChange={(e) => this.handleChangeNewSkill(e)}
                        ></input>
                        <button 
                            type='button'
                            onClick={this.addSkill}
                            tw='bg-red-300 self-center rounded mb-5'
                        >Send</button>
                        {arraySkills && 
                        arraySkills.map( skill => (
                            <div tw='bg-gray-200 border-orange-100 border-solid border-4 flex justify-around' key={skill.key + 'container'}>
                            <span key={skill.key}> {skill.skill}</span>
                            <button
                                tw='bg-red-200 rounded self-center'
                                onClick={() => this.deleteSkill(skill.key)}
                                key={skill.key + 'button'}>x</button>
                            </div>
                        ))}
                        <Button type='submit'>End edit</Button>
                    </Form>
                }
                <EditButton 
                    onClick={this.toggleSkillEdit}
                    icon={faEdit}/>
                <List>
                    {arraySkills.length > 0 ? 
                    arraySkills.map( skill => (
                        <li key={skill.key}>{skill.skill}</li>
                    )) : <p>Add skills please</p>}
                </List>
            </Widget>
        )
    }
}

export default Skills;