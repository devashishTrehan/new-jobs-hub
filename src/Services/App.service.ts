import { NoResult } from "../Components/NoResult.component";

export const Theme = {
    // primary: '#44b4d6',
    primary: '#ee294f',
    // secondary: '#1ba6df',
    secondary: '#2c335d',
    LightBackgroundBlue: '#f4f5fa',
    tertiary: '#385a64',
    fontColor: '#444',
    secondaryFontColor: '#5c6b8a',
    error: '#ff4444',
    success: '#00C851',
    warning: '#ffbb33',
    info: '#33b5e5',
    radius1: 5,
    radius2: 10,
    radius3: 20,
    boxShadow: '-5px -5px 25px 5px #ffffff67 , 5px 5px 25px 0 #aeaec067'
}

export const RecaptchaKeys = {
    site_key: '6Lc20vUZAAAAAA6oANXZ7CObtino2s5w-Ujps1Yx',
    secret_key: '6Lc20vUZAAAAAJhGL6PNzI4IgBN9ILuvrYz7KJRT'
}

export const Months: any = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
};

export const Routes = {
    Home: '/',
    Jobs: '/jobs',
    WalkInJobs: '/walkInJobs',
    Recruiters: '/recruiters',
    Login: '/login',
    User: '/user',
    UserJobs: '/user-jobs/:status',
    _UserJobsRoute: '/user-jobs',
    About: '/about-us',
    Contact: '/contact-us',
    Register: '/register',
    ProfileEdit: '/profile-edit/:slug',
    _ProfileEditRoute: '/profile-edit',
    Profile: '/profile/:slug',
    _ProfileRoute: '/profile',
    MailSent: '/mailSent',
    Emailverification: '/emailVerication',
    OtpVerification: '/otpVerication',
    Verification: '/verification',
    Mobileverification: '/mobileverification',
    passwordChange: '/change-password',
    CreatePassword: '/reset-password',
    jobDetail: '/details/:job',
    _JobDetailRoute: '/details',
    JobList: '/list',
    SignInHashes: {
        exist: 'exists',
        new: 'new'
    },
    verificationHashes: {
        email: 'email',
        otp: 'otp'
    }
}

export const ValidateFields = (conditions: any, refs: any) => {

    conditions?.forEach((condition: boolean, index: number) => {
        if (condition) {
            refs[index].makeDirty();
        }
    });

}

export const Storages = {
    Token: 'token',
    User: 'user'
}

export const getUser = async () => {
    let user = await localStorage.getItem(Storages.User);
    if (user) {
        user = JSON.parse(user);
        return user;
    } else {
        return false;
    }
}

export const StoreToken = async (token: any) => {
    localStorage.setItem(Storages.Token, JSON.stringify(token));
}

export const getToken = () => {
    let tokenString = localStorage.getItem(Storages.Token);
    if (tokenString) {
        let tokens = JSON.parse(tokenString);
        return tokens;
    } else {
        return null;
    }
}

export const clearStore = async (field: string) => {
    localStorage.removeItem(field);
}

export const StoreUser = async (data: Object) => {
    let user = JSON.stringify(data);
    localStorage.setItem(Storages.User, user);
}


export const JobStatusList = {
    NotAvailable: 'NA',
    Viewed: 'Viewed',
    Applied: 'Applied',
    Saved: 'Saved',
    Reviewed: 'Reviewed',
    Shortlisted: 'Shortlisted',
    Rejected: 'Rejected',
}

export const ErrorTypes = {
    UNVERIFIED_EMAIL: 'UNVERIFIED_EMAIL',
    USER_ALREADY_EXIST: 'USER_ALREADY_EXISTS',
}

export const RequestStatusList = {
    Error: 'error',
    Success: 'success',
    Warning: 'warning',
    Info: 'info'
}

//---------- The function changes formats to Indian Number system-------\\

export const Format_INS = (number: number | string) => {
    number = number.toString();
    var lastThree = number.substring(number.length - 3);
    var otherNumbers = number.substring(0, number.length - 3);
    if (otherNumbers != '')
        lastThree = ',' + lastThree;
    var result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return result;
}
