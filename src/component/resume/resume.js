import React, { Component } from 'react';
import { resumeData } from '../../utils/resume-data';
import './styles.css'
import candidateImg from '../../images/candidate-image.svg';

class ResumeBuilder extends Component {
    render() {
        return (
            <div className='parent-wrapper'>
                <div className='candidate-info'>
                    <div className='candidate-image'>
                        <img className='image-style' src={candidateImg} alt="candidateImg" />
                    </div>
                    <div className='candidate-details'>
                        <div className='role'>
                            <span>Role:</span>
                            <span>{resumeData.candidateInfo.role}</span>
                        </div>
                        <div className='mobile'>
                            <span>Mobile:</span>
                            <span>{resumeData.candidateInfo.mobile}</span>
                        </div>
                        <div className='email'>
                            <span>Email:</span>
                            <span>{resumeData.candidateInfo.email}</span>
                        </div>
                        <div className='linkedin'>
                            <span>Linkedin:</span>
                            <span>{resumeData.candidateInfo.linkedin}</span>
                        </div>
                        <div className='github'>
                            <span>Github:</span>
                            <span>{resumeData.candidateInfo.github}</span>
                        </div>
                        <div className='stackoverflow'>
                            <span>StackOverFlow:</span>
                            <span>{resumeData.candidateInfo.stackoverflow}</span>
                        </div>
                    </div>
                </div>

                <div className='candidate-intro'>
                    <div className='candidate-punchline'>
                        {resumeData.punchLine}
                    </div>
                    <div className='candidate-educationalinfo'>
                        <h4>ToDo: candidate-educationalinfo</h4>
                    </div>
                </div>

                <div className='candidate-experience'>
                    <div className='candidate-skillset'>
                        <h4>Todo: candidate-skillset</h4>
                    </div>
                    <div className='candidate-employmenthistory'>
                        {
                            resumeData.workExperience.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div>
                                            <span>Company:</span>
                                            <span>{item.Company}</span>
                                        </div>
                                        <div>
                                            <span>CompanyImage:</span>
                                            <span>{item.companyImage}</span>
                                        </div>
                                        <div>
                                            <span>{item.joinedOn}</span>
                                            <span>{item.leftOn}</span>
                                        </div>
                                        <div>
                                            <span>Website</span>
                                            <span>{item.website}</span>
                                        </div>
                                        <div>
                                            <span>Accomplishments: </span> <br />
                                            <li>
                                                {
                                                    item.accomplishments.map((item, index) => {
                                                        return (
                                                            <ul key={index}>{item}</ul>
                                                        )
                                                    })
                                                }
                                            </li>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        )
    }
}

export default ResumeBuilder;