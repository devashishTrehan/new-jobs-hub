import { Storages } from "./App.service";

/////////////////------------ for production -----------\\\\\\\\\\\\\

// export const BASE_URL = 'https://newjobshub.com/web-service/api/';
// export const Domain = 'https://newjobshub.com';


/////////////////------------ for development -----------\\\\\\\\\\\\\

// export const BASE_URL = 'http://127.0.0.1:8000/api/';
// export const Domain = 'http://127.0.0.1:8000';


/////////////////------------ for testing -----------\\\\\\\\\\\\\

export const BASE_URL = 'http://192.168.1.202/web-service/api/';
export const Domain = 'http://192.168.1.202';


const UserUrl = BASE_URL + 'user/';
const JobUrl = BASE_URL + 'jobs/';
const FilterOptionUrl = BASE_URL + 'attribs/';
const CandidateUrl = UserUrl + 'candidate/';
const ProfileUrl = CandidateUrl + 'profile/';
const ProfileUpdateUrl = CandidateUrl + 'profile/update/';

export const GetAccessTokenUrl = UserUrl + 'token/refresh/';

const ApiRoutes = {
    JobListUrl: JobUrl + 'list/',
    JobSearchUrl: JobUrl + 'search/',
    JobDetailUrl: JobUrl + 'details/',
    JobApplyUrl: JobUrl + 'apply/',
    JobSaveUrl: JobUrl + 'save/',
    RegisterUrl: UserUrl + 'register/',
    LoginUrl: UserUrl + 'login/',
    LogoutUrl: UserUrl + 'logout/',
    ChangePasswordUrl: UserUrl + 'change_password/',
    ResetPasswordUrl: UserUrl + 'reset_password/',
    EmailVerifyUrl: UserUrl + 'verify_email/',
    SendConfirmationEmailUrl: UserUrl + 'send_confirmation_mail/',
    RequestEmailConfirmationUrl: UserUrl + 'get_email_flag/',
    UserJobsUrl: ProfileUrl + 'applications/',
    ProfileUrl: ProfileUrl,
    ProfileUpdateUrl: ProfileUrl + 'update/',
    SkillsUpdateUrl: ProfileUpdateUrl + 'skills/',
    ProfileSummaryUpdateUrl: ProfileUpdateUrl + 'summary/',
    ProfileHeadlineUpdateUrl: ProfileUpdateUrl + 'headline/',
    ExperienceUpdateUrl: ProfileUpdateUrl + 'experience/',
    EducationUpdateUrl: ProfileUpdateUrl + 'education/',
    ProjectsUpdateUrl: ProfileUpdateUrl + 'projects/',
    ProfileImageUpdateUrl: ProfileUpdateUrl + 'image/',
    CoverImageUpdateUrl: ProfileUpdateUrl + 'cover_image/',
    ResumeUpdateUrl: ProfileUpdateUrl + 'resume/',

}

const setHeader = (token: string = '') => {
    let header = new Headers();
    // header.append('authorization', token);
    if (token) {
        header.append('Authorization', `Bearer ${token}`);
    }
    header.append('Content-Type', 'application/json');
    return header;
}

setHeader();

const ApiService = {}

const PostRequestObject = (data: object, token: string = '') => ({
    headers: setHeader(token),
    method: 'post',
    body: JSON.stringify(data)

})

export const Register = async (data: object) => {

    return fetch(ApiRoutes.RegisterUrl, PostRequestObject(data))
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const Login = async (data: object) => {
    let statusCode: number | null = null;
    return fetch(ApiRoutes.LoginUrl, PostRequestObject(data))
        .then(response => {
            statusCode = response.status;
            return response.json()
        })
        .then(responseJson => {
            responseJson.statusCode = statusCode;
            return responseJson
        })
        .catch(error => console.log('error', error));
}

export const ChangePassword = async (token: string, data: object) => {
    return fetch(ApiRoutes.ChangePasswordUrl, PostRequestObject(data, token))
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const ResetPassword = async (data: object, query: string) => {
    return fetch(ApiRoutes.ResetPasswordUrl + query, PostRequestObject(data))
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const VerifyEmail = async (data: object, stage: number = 1) => {
    return fetch(ApiRoutes.EmailVerifyUrl + `?stage=${stage}`, PostRequestObject(data))
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const SendConfirmationMail = async (token: string, id: number | undefined) => {
    return fetch(ApiRoutes.SendConfirmationEmailUrl + `?id=${id}`, {
        headers: setHeader(token)
    })
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const GetUserMailConfirmation = async (token: string, id: number | undefined) => {
    return fetch(ApiRoutes.RequestEmailConfirmationUrl + `?id=${id}`, {
        headers: setHeader(token)
    })
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const Logout = async (token: string, id: number) => {
    return fetch(ApiRoutes.LogoutUrl + `?userId=${id}&token=${token}`)
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const GetJobList = async (token: string, filters: any, userId: number) => {
    let query: string;
    if (userId) {
        query = ApiRoutes.JobListUrl + `?filters=${JSON.stringify(filters)}&id=${userId}`;
    } else {
        query = ApiRoutes.JobListUrl + `?filters=${JSON.stringify(filters)}`;
    }
    console.log('jobs request', query)
    return fetch(query, {
        headers: setHeader(token)
    })
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const GetUserJobList = async (token: string, status: string, userId: number) => {
    let query: string;
    if (userId) {
        query = ApiRoutes.UserJobsUrl + `?status=${status}&id=${userId}`;
    } else {
        query = ApiRoutes.UserJobsUrl + `?status=${status}&id=${userId}`;
    }
    console.log('jobs request', query)
    return fetch(query, {
        headers: setHeader(token)
    })
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const GetSearchedJobList = async (token: string, keyword: string, location: string, userId: number) => {
    let query: string;
    if (userId) {
        query = ApiRoutes.JobSearchUrl + `?keyword=${keyword}&city=${location}&id=${userId}`;
    } else {
        query = ApiRoutes.JobSearchUrl + `?keyword=${keyword}&city=${location}`;
    }
    console.log('jobs request', query)
    return fetch(query, {
        headers: setHeader(token)
    })
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const GetJobDetail = async (token: string, slug: string, userId: number) => {
    console.log(userId);
    let query: string;
    if (userId) {
        query = ApiRoutes.JobDetailUrl + `?job=${slug}&id=${userId}`;
    } else {
        query = ApiRoutes.JobDetailUrl + `?job=${slug}`;
    }
    console.log('jobs request', query)
    return fetch(query, {
        headers: setHeader(token)
    })
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const ApplyToJob = async (token: string, userId: number, slug: string) => {
    let query: string;
    if (userId) {
        query = ApiRoutes.JobApplyUrl + `?jobIdentifier=${slug}&id=${userId}`;
    } else {
        query = ApiRoutes.JobApplyUrl + `?jobIdentifier=${slug}`;
    }
    console.log('jobs request', query)
    return fetch(query, {
        headers: setHeader(token)
    })
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const SaveJob = async (token: string, userId: number, slug: string) => {
    let query: string;
    if (userId) {
        query = ApiRoutes.JobSaveUrl + `?jobIdentifier=${slug}&id=${userId}`;
    } else {
        query = ApiRoutes.JobSaveUrl + `?jobIdentifier=${slug}`;
    }
    console.log('jobs request', query)
    return fetch(query, {
        headers: setHeader(token)
    })
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const GetProfileData = async (token: string, slug: string) => {
    console.log('profile url', ApiRoutes.ProfileUrl + `?profileIdentifier=${slug}`)
    return fetch(ApiRoutes.ProfileUrl + `?profileIdentifier=${slug}`, {
        headers: setHeader(token)
    })
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const UpdatePersonalInfo = async (token: string, userId: number, data: any) => {
    console.log('profile url', ProfileUpdateUrl + `?id=${userId}`)
    console.log('request data', data)
    return fetch(ProfileUpdateUrl + `?id=${userId}`, PostRequestObject(data, token))
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}
export const UpdateSkills = async (token: string, userId: number, data: any,) => {
    console.log('profile url', ApiRoutes.SkillsUpdateUrl + `?id=${userId}`)
    return fetch(ApiRoutes.SkillsUpdateUrl + `?id=${userId}`, PostRequestObject(data, token))
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const UpdateProfileSummary = async (token: string, userId: number, data: any,) => {
    console.log('summary url', ApiRoutes.ProfileSummaryUpdateUrl + `?id=${userId}`)
    return fetch(ApiRoutes.ProfileSummaryUpdateUrl + `?id=${userId}`, PostRequestObject(data, token))
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const UpdateProfileHeadline = async (token: string, userId: number, data: any) => {
    console.log('headline url', ApiRoutes.ProfileHeadlineUpdateUrl + `?id=${userId}`)
    return fetch(ApiRoutes.ProfileHeadlineUpdateUrl + `?id=${userId}`, PostRequestObject(data, token))
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const UpdateExperience = async (token: string, userId: number, data: any, employmentId: number | null = 0) => {
    console.log('experience url', ApiRoutes.ExperienceUpdateUrl + `?id=${userId}&experienceIdentifier=${employmentId}`)
    return fetch(ApiRoutes.ExperienceUpdateUrl + `?id=${userId}&experienceIdentifier=${employmentId}`, PostRequestObject(data, token))
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const UpdateEducation = async (token: string, userId: number, data: any, educationId: number | null = 0) => {
    console.log('education url', ApiRoutes.EducationUpdateUrl + `?id=${userId}&educationIdentifier=${educationId}`)
    return fetch(ApiRoutes.EducationUpdateUrl + `?id=${userId}&educationIdentifier=${educationId}`, PostRequestObject(data, token))
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const DeleteUserEducation = async (token: string, userId: number, educationId: number | null = 0) => {
    console.log('education url', ApiRoutes.EducationUpdateUrl + `?id=${userId}&educationIdentifier=${educationId}`)
    return fetch(ApiRoutes.EducationUpdateUrl + `?id=${userId}&educationIdentifier=${educationId}`, {
        headers: setHeader(token),
        method: 'delete'
    })
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const DeleteUserEmployment = async (token: string, userId: number, employmentId: number | null = 0) => {
    console.log('education url', ApiRoutes.ExperienceUpdateUrl + `?id=${userId}&experienceIdentifier=${employmentId}`)
    return fetch(ApiRoutes.ExperienceUpdateUrl + `?id=${userId}&experienceIdentifier=${employmentId}`, {
        headers: setHeader(token),
        method: 'delete'
    })
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}



export const UpdateProjects = async (token: string, userId: number, data: any, projectId: number | null = 0) => {
    console.log('projects url', ApiRoutes.ProjectsUpdateUrl + `?id=${userId}&projectIdentifier=${projectId}`)
    return fetch(ApiRoutes.ProjectsUpdateUrl + `?id=${userId}`, PostRequestObject(data, token))
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const DeleteUserProjects = async (token: string, userId: number, projectId: number | null = 0) => {
    console.log('projects url', ApiRoutes.ProjectsUpdateUrl + `?id=${userId}&projectIdentifier=${projectId}`)
    return fetch(ApiRoutes.ProjectsUpdateUrl + `?id=${userId}`, {
        headers: setHeader(token),
        method: 'delete'
    })
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const UpdateProfileImage = async (token: string, userId: number, data: any) => {
    console.log('projects url', ApiRoutes.ProfileImageUpdateUrl + `?id=${userId}`)
    return fetch(ApiRoutes.ProfileImageUpdateUrl + `?id=${userId}`, PostRequestObject(data, token))
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const UpdateCoverImage = async (token: string, userId: number, data: any) => {
    console.log('projects url', ApiRoutes.CoverImageUpdateUrl + `?id=${userId}`)
    return fetch(ApiRoutes.CoverImageUpdateUrl + `?id=${userId}`, PostRequestObject(data, token))
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}

export const UpdateResume = async (token: string, userId: number, data: any) => {
    console.log('projects url', ApiRoutes.ResumeUpdateUrl + `?id=${userId}`)
    return fetch(ApiRoutes.ResumeUpdateUrl + `?id=${userId}`, PostRequestObject(data, token))
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}


export const GetFilterOptions = async () => {
    console.log('filterOption url', ApiRoutes.JobDetailUrl)
    return fetch(FilterOptionUrl)
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));
}



export default ApiService;