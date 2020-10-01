import React,{Component} from 'react'
import  tw, { styled, css } from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div ([
    css `
        margin:5px;
    `,
    tw `ml-6 mr-6 mt-4 pb-4 relative`
])

const Job = styled.div ([
    css `
        border-bottom:1px solid gray;
        margin:5px;
    `,
    tw `flex flex-col pb-4`
])

const JobPosition = styled.h3 ([
    css `WORD-BREAK: break-all;`,
    tw `mb-1 mt-2`
])

const Company = styled.h3 ([
    css `WORD-BREAK: break-all;`,
    tw `mb-1 mt-2`
])

const DateContainer = styled.h3 ([
    tw `mb-3 mt-2 flex `
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

const Title = styled.h3 ([
    tw `mb-2 mr-5 text-xl tracking-wider`
])

const Text = styled.p ([
    css `WORD-BREAK: break-all;`,
    tw `font-light text-sm italic text-justify ml-2`
])

class WorkExperience extends Component {
    constructor(props){
        super(props)
        this.state = {
            jobEditToggle: false,
            job: {
                jobPosition: 'CEO',
                jobCompany: 'Facebook',
                jobDateStart:'2017-02',
                jobDateEnd: '2020-03',
                jobText: 'Info that you want to share about the job',
            }
        }

        this.handleJobEditToggle = this.handleJobEditToggle.bind(this);
        this.handleJobSubmitForm = this.handleJobSubmitForm.bind(this);
    }


    handleJobPositionChange(e) {
        const text = e.target.value
        this.setState(prevState => ({
            job: {
                ...prevState.job,
                jobPosition: text
            }
        }))
    }

    handleJobCompanyChange(e) {
        const text = e.target.value
        this.setState(prevState => ({
            job: {
                ...prevState.job,
                jobCompany: text
            }
        }))
    }

    handleJobDateStartChange(e) {
        const value = e.target.value
        this.setState(prevState => ({
            job:{
                ...prevState.job,
                jobDateStart: value
            }
        }))
    }

    handleJobDateEndChange(e) {
        const value = e.target.value
        this.setState(prevState => ({
            job:{
                ...prevState.job,
                jobDateEnd: value
            }
        }))
    }

    handleJobTextChange(e) {
        const text = e.target.value
        this.setState(prevState => ({
            job: {
                ...prevState.job,
                jobText: text
            }
        }))
    }

    handleJobEditToggle() {
        this.setState(prevState => ({
            jobEditToggle: !prevState.jobEditToggle
        }));
    }

    handleJobSubmitForm(e) {
        e.preventDefault();
        this.handleJobEditToggle();
    }

    render() {
        return( 
            <Container>
                <Title>WORK EXPERIENCE</Title>
                {this.state.jobEditToggle &&
                    <Form onSubmit={this.handleJobSubmitForm}>
                        <label>Position</label>
                        <input
                            placeholder='Position'
                            defaultValue={this.state.job.jobPosition}
                            onChange={(e) => this.handleJobPositionChange(e)}
                        ></input>
                        <label>Company</label>
                        <input
                            placeholder='Company'
                            defaultValue={this.state.job.jobCompany}
                            onChange={(e) => this.handleJobCompanyChange(e)}
                        ></input>
                        <label>Date Start</label>
                        <input
                            type="month"
                            defaultValue={this.state.job.jobDateStart}
                            onChange={(e) => this.handleJobDateStartChange(e)}
                        ></input>
                        <label>Date End</label>
                        <input
                            type="month"
                            defaultValue={this.state.job.jobDateEnd}
                            onChange={(e) => this.handleJobDateEndChange(e)}
                        ></input>
                        <label>Info about the job</label>
                        <TextArea
                            defaultValue= {this.state.job.jobText}
                            onChange= {(e) => this.handleJobTextChange(e)}
                        ></TextArea>
                        <Button>End edit</Button>
                    </Form>
                }
                <EditButton
                    icon={faEdit}
                    onClick={this.handleJobEditToggle}
                />
                <Job>
                    <JobPosition>Position: {this.state.job.jobPosition}</JobPosition>
                    <Company>Company: {this.state.job.jobCompany}</Company>
                    <DateContainer> Date: {this.state.job.jobDateStart} / {this.state.job.jobDateEnd}
                    </DateContainer>
                    <Text>{this.state.job.jobText}</Text>
                </Job>
            </Container>
        )
    }
}

export default WorkExperience