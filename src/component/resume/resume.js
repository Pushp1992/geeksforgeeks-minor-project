import React, { Component } from 'react';
import { resumeData } from '../../utils/resume-data';
import './styles.css'
import candidateImg from '../../images/candidate-image.svg';
import swiggyLogo from '../../images/swiggy-logo.webp';
import tnyLogo from '../../images/tny-logo3.png';
import cesLogo from '../../images/ces-logo.png';
import syntelLogo from '../../images/syntel-logo.png';
import eduLogo from '../../images/edu-logo.png';
import aboutMe from '../../images/about-me.jpeg';

class ResumeBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workExperience: []
        }
    };

    static getDerivedStateFromProps(props, state) {
        const workExperiences = resumeData.workExperience.map(item => {
            if (item.employerName === 'New Yorker') {
                item = { ...item, ...item.employerLogo = tnyLogo };
            } else if (item.employerName === 'Swiggy') {
                item = { ...item, ...item.employerLogo = swiggyLogo };
            } else if (item.employerName === 'CES LTD') {
                item = { ...item, ...item.employerLogo = cesLogo };
            } else if (item.employerName === 'Syntel') {
                item = { ...item, ...item.employerLogo = syntelLogo };
            }
            return item;
        });

        if (props.workExperience !== state.workExperience) {
            //Change in props
            return {
                workExperience: workExperiences
            };
        }
    };

    render() {
        const skillsetList = (resumeData) => resumeData.skillSet.map((skill, index) => {
            for (const [key, value] of Object.entries(skill)) {
                return (
                    <div className='skillset-list'>
                        <div className='skillset-name'>{key}</div>
                        <div className="w3-light-grey w3-round-xlarge" style={{ width: '100%' }}>
                            <div className="w3-container w3-green w3-round-xlarge" style={{ width: value }}>{value}</div>
                        </div>
                    </div>
                )
            };
        });

        return (
            <div className='parent-wrapper'>
                <div className='candidate-info'>
                    <div className='candidate-image'>
                        <img className='candidate-image-style' src={candidateImg} alt="candidateImg" />
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
                {/* <div className="solid"> */}
                    <hr className="solid" />
                {/* </div> */}
                <div className='candidate-intro'>
                    <div className='candidate-punchline'>
                        <div className='flip-card-inner'>
                            <div className="flip-card-front">
                                <img className='edu-image-style' src={aboutMe} alt="educational-info" />
                            </div>
                            <div className='flip-card-back'>
                                <span>{resumeData.punchLine}</span>
                            </div>
                        </div>
                    </div>
                    <div className='candidate-educationalinfo'>
                        <div className='flip-card-inner'>
                            <div className="flip-card-front">
                                <img className='edu-image-style' src={eduLogo} alt="educational-info" />
                            </div>
                            <div className='flip-card-back'>
                                <span>{resumeData.educationalInfo.degree}</span>
                                <span>{resumeData.educationalInfo.course}</span>
                                <div className='educationalinfo-universityStateCity'>
                                    <span>{resumeData.educationalInfo.universityName},</span>{''}
                                    <span>{resumeData.educationalInfo.city},</span>{''}
                                    <span>{resumeData.educationalInfo.state}</span>
                                </div>
                                <span>{resumeData.educationalInfo.courseDuration}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='candidate-experience'>
                    <div className='candidate-skillset'>
                        {skillsetList(resumeData)}
                    </div>
                    <div className='candidate-employmenthistory'>
                        {
                            this.state.workExperience.map((item, index) => {
                                return (
                                    <div className='employer-card' key={index}>
                                        <div className='card-heading'>
                                            <div>
                                                <span>
                                                    <img className='logo-image-style' src={item.employerLogo} alt={`${item.employerName}-logo`} />
                                                </span>
                                            </div>
                                            <div>
                                                <span>
                                                    <a href={item.website} alt={item.website}>{item.employerName}</a>
                                                </span>
                                            </div>
                                            <div>
                                                <span>{item.joinedOn} - </span>{''}
                                                <span>{item.leftOn}</span>
                                            </div>
                                        </div>
                                        <div className='card-body'>
                                            <span>Accomplishments: </span>
                                            {
                                                item.accomplishments.map((item, index) => {
                                                    return (
                                                        <ul key={index}>
                                                            <li key={index}>{item}</li>
                                                        </ul>
                                                    )
                                                })
                                            }
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