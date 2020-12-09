import { createMuiTheme, ThemeProvider, } from '@material-ui/core';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../Pages/Home.page/Home.page';
import { JobDetail } from '../Pages/JobDetail.page';
import { Jobs } from '../Pages/Jobs.page';
import LoginRegisterPage from '../Pages/LoginRegister.page/LoginRegister.page';
import { MailSent } from '../Pages/MailSent.page';
import MailVerify from '../Pages/MailVerify.page';
import { MoblileVerification } from '../Pages/MobileVerification.page';
import { OTPVerification } from '../Pages/OTPVerification.page';
import { PasswordChange } from '../Pages/PasswordChange.page';
import { Recruiters } from '../Pages/Recruiters.page';
import { NotFoundPage } from '../Pages/NotFound.page';
import { RegisterPage } from '../Pages/Register.page';
import { WalkInJobs } from '../Pages/WalkInJobs.page';
import { Routes, Theme } from '../Services/App.service';
import { Loader } from '../Components/Loader.component/Loader.component';
import { About } from '../Pages/About.page/About.page';
import { Contact } from '../Pages/Contact.page/Contact.page';
import { JobListContextProvider } from '../Context/JobList.context';
import { NavBar } from '../Components/Navbar.component';
import { CopyRightStrip } from '../Components/Footer.component';
import { UserJobsList } from '../Pages/UserJobList.page';
import { CreateNewPassword } from '../Pages/CreateNewPassword.page';

const Profile = React.lazy(() => import('../Pages/Profile.page/ProfileView.page'));
const ProfileEdit = React.lazy(() => import('../Pages/Profile.page/ProfileEdit.page'));


const jobDetailPage = (props: any) => {
    return (
        <>
            <NavBar rightContainerStyle={{ padding: '0 30px', flexGrow: 1 }} />
            <div style={{ padding: '0 calc(5% - 20px)' }}>
                <JobDetail {...props} />
            </div>
            <CopyRightStrip color={Theme.fontColor} />
        </>
    )
}

const JobsPage = (props: any) => {
    return (
        <>
            <JobListContextProvider>
                <Switch>
                    <Route path={`${props.match.url}${Routes.JobList}`} component={Jobs} />
                    <Route path={`${props.match.url}${Routes.UserJobs}`} component={UserJobsList} />
                    <Route path={`${props.match.url}${Routes.jobDetail}`} component={jobDetailPage} />
                    <Route path={'*'} component={NotFoundPage} />
                </Switch>
            </JobListContextProvider>
        </>
    )
}

export function MainRoute(props: any) {


    return (
        <>
            <React.Suspense fallback={<Loader />}>
                <Router>
                    <Switch>
                        <Route exact path={Routes.Home} component={Home} />
                        <Route path={Routes.User} component={LoginRegisterPage} />
                        <Route path={Routes.Register} component={RegisterPage} />
                        <Route path={Routes.Profile} component={Profile} />
                        <Route path={Routes.ProfileEdit} component={ProfileEdit} />
                        <Route path={Routes.passwordChange} component={PasswordChange} />
                        <Route path={Routes.CreatePassword} component={CreateNewPassword} />
                        <Route path={Routes.Mobileverification} component={MoblileVerification} />
                        <Route path={Routes.OtpVerification} component={OTPVerification} />
                        <Route path={Routes.Verification} component={MailVerify} />
                        <Route path={Routes.MailSent} component={MailSent} />
                        <Route path={Routes.WalkInJobs} component={WalkInJobs} />
                        <Route path={Routes.Jobs} component={JobsPage} />
                        {/* <Route path={Routes.Jobs} component={Jobs} />
                                <Route path={Routes.jobDetail} component={jobDetailPage} /> */}
                        <Route path={Routes.Recruiters} component={Recruiters} />
                        <Route path={Routes.About} component={About} />
                        <Route path={Routes.Contact} component={Contact} />
                        <Route path={'*'} component={NotFoundPage} />
                    </Switch>
                </Router>
            </React.Suspense>
        </>
    );
}
