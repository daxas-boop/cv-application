/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { Component } from 'react'
import  tw, { styled, css } from 'twin.macro';
import uniqid from 'uniqid';
import Contact from './Contact'
import Education from './Education'
import Skills from './Skills'

const Container = styled.div([
    css ` 
        font-family: 'Roboto', sans-serif;
        background-color: #414143;
    `,
    tw `container rounded-l-sm rounded-t-none text-white flex flex-col
        col-start-1 col-end-4 
        sm:(row-start-2 row-end-6) sm:(col-start-1 col-end-2)
    `
])

class SideNav extends Component {
    constructor(props){
        super(props)
        this.state= {
            contact: {
                email:'',
                phone:'',
                github:'',
                contactEdit: false,
            },
            education: {
                university:'',
                dateStart:'',
                dateEnd:'',
                title:'',
                educationEdit: false,
            },
            skills:{
                arraySkills:[
                    {
                        skill:'HTML',
                        key:uniqid()
                    },
                    {
                        skill:'CSS',
                        key:uniqid()
                    }
                ],
                skillEdit:false,
            },
            newSkillInput: '' //this should be on skills object but throws a weird bug -.-!
        }

        this.sumbitContactForm = this.sumbitContactForm.bind(this);
        this.toggleContactEdit = this.toggleContactEdit.bind(this);
        this.sumbitEducationForm = this.sumbitEducationForm.bind(this);
        this.toggleEducationEdit = this.toggleEducationEdit.bind(this);
        this.sumbitSkillsForm = this.sumbitSkillsForm.bind(this);
        this.toggleSkillEdit = this.toggleSkillEdit.bind(this);
        this.deleteSkill = this.deleteSkill.bind(this);
        this.handleChangeNewSkill = this.handleChangeNewSkill.bind(this);
        this.addSkill = this.addSkill.bind(this)
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

    toggleSkillEdit(){
        this.setState( prevState => ({
           skills: {
               ...prevState.skills,
               skillEdit: !prevState.skills.skillEdit
            }
        }))
    }

    sumbitSkillsForm(e){
        e.preventDefault();
        this.toggleSkillEdit();
    }

    deleteSkill(key) { // takes a key and deletes that skill from the skills array
        this.setState( prevState =>(
            {skills: 
                {
                    ...prevState.skills,
                    arraySkills: [...this.state.skills.arraySkills.filter( skill =>
                    skill.key !== key)]
                }
            }))
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
            skills:{
                ...prevState,
                arraySkills: [...prevState.skills.arraySkills, newSkill]
            }
        }))
    }

    render() {
        const {contact: {email, phone, github, contactEdit} } = this.state;
        const {education: {university, dateStart, dateEnd, title, educationEdit} } = this.state;
        const { skills: {arraySkills, skillEdit} } = this.state;
        const { newSkillInput } = this.state;

        return(
            <Container>
                <Contact
                    contactEdit= {contactEdit}
                    email={email}
                    phone={phone}
                    github={github}
                    toggleContactEdit={this.toggleContactEdit}
                    sumbitContactForm={this.sumbitContactForm}
                />
                <Education
                    university={university}
                    dateStart={dateStart}
                    dateEnd={dateEnd}
                    title={title}
                    educationEdit={educationEdit}
                    toggleEducationEdit={this.toggleEducationEdit}
                    sumbitEducationForm={this.sumbitEducationForm}
                />
                <Skills
                    arraySkills={arraySkills}
                    skillEdit={skillEdit}
                    newSkillInput={newSkillInput}
                    toggleSkillEdit={this.toggleSkillEdit}
                    sumbitSkillsForm={this.sumbitSkillsForm}
                    deleteSkill={this.deleteSkill}
                    handleChangeNewSkill={this.handleChangeNewSkill}
                    addSkill={this.addSkill}
                />
            </Container>
        )
    }
}

export default SideNav;