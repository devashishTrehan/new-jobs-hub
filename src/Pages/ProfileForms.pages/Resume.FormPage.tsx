import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import '../Profile.page/Profile.page.css';
import './FormPages.css';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { ProfileContext } from '../../Context/Profile.context';
import { Domain, UpdateResume } from '../../Services/Api.service';
import moment from 'moment';
import { UserContext } from '../../Context/User.context';
import { Loader } from '../../Components/Loader.component/Loader.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../../Services/App.service';


export const ResumeFormPage = () => {

    // Here userProfileSlug is getting from Profile context , the Id got from query parameter to prevent self updation...
    const { profileDetails, RequestResponseHandler, userProfileSlug } = useContext(ProfileContext);
    const { user, token } = useContext(UserContext);
    const { resume } = profileDetails;

    const [loading, setLoading]: any = useState(false);
    const [data, setData]: any = useState({
        has_no_resume: true,
        resume_uploaded_at: '',
        resume_file: ''

    });
    const [Form, setForm]: any = useState({
        resume: {}
    });

    const [isSectionFocused, setIsSectionFocused] = useState(false);
    const sectionId = 'attach-resume';

    useEffect(() => {
        setData(resume)
    }, [resume])

    const location = useLocation();
    useEffect(() => {
        if (location.hash == `#${sectionId}`) {
            setIsSectionFocused(true);
        } else {
            setIsSectionFocused(false);

        }
    }, [location.hash])

    const formFields = {
        Resume: 'resume',
    }

    const fieldChangeHandler = (field: string, value: any) => {
        setForm((prev: any) => {
            return {
                ...prev,
                [field]: value
            }
        })
    }

    const onFileSelect = (event: any) => {

        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {

            fieldChangeHandler(formFields.Resume, { fileName: file.name, encodedStream: reader.result })
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }


    const submitHandler = async (event: any) => {
        event.preventDefault();

        setLoading(true);
        var response = await UpdateResume(token?.access, userProfileSlug, { resume_file: Form?.resume?.encodedStream });
        setLoading(false);

        // console.log(`resume upload of `, response);
        RequestResponseHandler(response, 'resume');

        if (response?.status) {
            fieldChangeHandler(formFields.Resume, {});
        }


    }

    // const { has_no_resume, resume_file, resume_uploaded_at } = data;

    return (
        <div style={{ position: 'relative' }}>

            <div
                className={
                    classNames({
                        'attach-resume-sec': true,
                        'border-shadow': true,
                        'focused-section': isSectionFocused
                    })} id={sectionId}>
                <h3>{data?.has_no_resume ? 'Attach' : 'Update '} Resume
                    <span className='profile-sec-comp-indicator'>
                        <FontAwesomeIcon icon={!data?.has_no_resume ? faCheckCircle : faTimesCircle} style={{ color: !data?.has_no_resume ? Theme.success : Theme.error }} />
                    </span>
                </h3>
                <p>Resume is the most important document recruiters look for. Recuriter generally do not look at profile without resumes.</p>


                <form onSubmit={submitHandler}>
                    {
                        !data?.has_no_resume && (

                            <div className='resume-info-container-uploaded' >
                                <span className={'field'}>Resume : </span>
                                <span>
                                    <a href={Domain + data?.resume_file} download> View</a>
                                    <span> (<i>last updated at - {moment(data?.resume_uploaded_at).format('DD-MM-YYYY HH:mm:ss')}</i>)</span>
                                </span>
                            </div>
                        )
                    }

                    <div className={'resume-info-container'}>
                        <input onChange={onFileSelect} type="file" name="" id="upload-cb" accept=".doc, .docx, .rtf, .pdf" data-max-size="2048" />
                        <label htmlFor="upload-cb" className='resume-upload-button' title="Upload Resume" >CHOOSE RESUME</label>
                        <p>Supported Format: doc, docx, rtf, pdf, upto 2 MB</p>
                        {
                            Form?.resume?.fileName && (
                                <div className={'resume-info-container'} >
                                    <div style={{ textAlign: 'left' }} >
                                        <span className={'field'}>New Resume : </span>
                                        <span>
                                            <span> {Form?.resume?.fileName}</span>
                                        </span>
                                    </div>
                                    <Button variant='contained' color={'primary'} type={'submit'} >Upload</Button>
                                </div>
                            )
                        }
                    </div>
                </form>

                {/* <!-- for partison or and resume document brife section -->
      <!-- <div className="partison-sec"><span></span><span>or</span></div>
                <p className="text-center resume-des">If you do not have a resume document, you may write your brife professional profile <a>here</a></p> -->
        <!-- for partison or and resume document brife section --> */}

            </div>
            {
                loading && (<Loader />)
            }

        </div>
    )
}
